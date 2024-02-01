import React, { useEffect, useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from 'ag-grid-community';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner';
import './GridExample.css'

interface GridExampleData {
    mission: string;
    company: string;
    location: string;
    date: string;
    time: string;
    rocket: string;
    price: number;
    successful: boolean;
}

const GridExample = () => {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<GridExampleData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState<ColDef<GridExampleData>[]>([
        { field: "mission" },
        { field: "company", filter: true },
        { field: "location" },
        { field: "date" },
        { field: "time" },
        { field: "rocket" },
        { field: "price" },
        { field: "successful" }
    ]);

    useEffect(() => {
        getRowData();
    }, [])

    const getRowData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://www.ag-grid.com/example-assets/space-mission-data.json')
            setRowData(response.data)
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            setErrorMessage("Unable to fetch the detatils")
            setIsLoading(false);
        }
    }
    // Apply settings across all columns
    const defaultColDef = useMemo<ColDef>(() => {
        return {
            filter: true
        };
    }, []);

    return (
        <div className='grid-container'>
            <div className="ag-theme-quartz" style={{ width: '100%', height: '500px' }}>
                {isLoading ? <LoadingSpinner /> : <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} pagination={true} />}
            </div>
        </div>
    )
}

export default GridExample