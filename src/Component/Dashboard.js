import React from 'react'

function Dashboard() {

    const orgData = [

        {

            id: 101,

            name: 'Abacavir',

            quantity: 25,

            price: 150,

            expiry: 2022

        },

        {

            id: 102,

            name: 'Eltrombopag',

            quantity: 90,

            price: 550,

            expiry: 2021

        },

        {

            id: 103,

            name: 'Meloxicam',

            quantity: 85,

            price: 450,

            expiry: 2025

        },

        {

            id: 104,

            name: 'Allopurinol',

            quantity: 50,

            price: 600,

            expiry: 2023

        },

        {

            id: 105,

            name: 'Phenytoin',

            quantity: 63,

            price: 250,

            expiry: 2021

        },

    ]
    return (
        <div>
            <h1 className='h1'>Medicine</h1>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Expiry Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orgData.map((data) => {
                            return (
                                <>
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.quantity}</td>
                                        <td>{data.price}</td>
                                        <td>{data.expiry}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard