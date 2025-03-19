import React from 'react';

export default function Title({text, className}: {text:string, className?:string}){
    return (
        <div className={className}>
            <div>
                <h1 className="text-2xl font-bold mt-20">
                    {text}
                </h1>
            </div>
        </div>
    )
}
