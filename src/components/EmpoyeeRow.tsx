'use client'
import { DeleteEmployee } from "@/lib/deleteActions";
import { Empoylee } from "@prisma/client";
import Link from "next/link";


interface EmployeRowProps{
   
    emaploye:Empoylee
}

export default function EmployeRow({emaploye}:EmployeRowProps){

    

    return(
       
                <tbody  className="divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {emaploye.srno }.
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {emaploye.name}
                        </td>
                    
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800  ">
                           <a href={`mailto:${emaploye.email}`}> {emaploye.email}</a>
                        </td>
                     
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {emaploye.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            +91 {emaploye.Phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link href={`employee/${emaploye.id}`} className="text-green-600">
                                Edit
                            </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button onClick={() =>{
                                DeleteEmployee(emaploye.id);
                            }} className="text-red-600 cursor-pointer " >
                                Delete
                            </button>
                        </td>
                    </tr>

                </tbody>
            )
        
    
}