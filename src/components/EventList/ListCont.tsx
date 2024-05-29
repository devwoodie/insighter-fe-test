import React, { useState } from 'react'
import { listHeader } from '../../utils/data/formData';
import { TListHeader } from '../../utils/data/types';
import { TEventList } from '../../api/types/eventList';
import { Pagenation } from './Pagenation';
import { Alert } from '../../utils/alert';
import { useNavigate } from 'react-router-dom';
import { dDayForm } from '../../utils/functions/dateForm';

type TProps = {
    list: TEventList[] | [];
    searchKeyword: string;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const ListCont = ({
    list,
    searchKeyword,
    currentPage,
    setCurrentPage
}: TProps) => {

    const navigate = useNavigate();
    const ITEMS_PER_PAGE = 8;
    const filteredList = list.filter((item: TEventList) =>
        item.eventName.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const sortedList = filteredList.slice().sort((a: TEventList, b: TEventList) => {
        const dDayA = dDayForm(a.date);
        const dDayB = dDayForm(b.date);
        return dDayA - dDayB;
    });

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = sortedList.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(sortedList.length / ITEMS_PER_PAGE);

    const handleDelete = () => {
        Alert.warning({
            title: "이 이벤트를 삭제하시겠습니까?",
            action: (result) => {
                if(result.isConfirmed){

                }
            }
        })
    }
    const handleClick = () => {
        navigate("/detail", {state: {"type": "detail"}})
    }
    const handleDDay = (day: string): string => {
        const dDay = dDayForm(day)
        if(dDay > 0){
            return `D-${dDay}`
        }else{
            const count = Math.abs(dDay);
            return `D+${count}`
        }
    }

    return (
        <div>
            {list?.length !== 0 ? 
            <div>
                <table className='w-full table-fixed'>
                    <thead className='border-b-[1px] border-solid border-[#676767]'>
                        <tr>
                            {listHeader?.map((item: TListHeader) => (
                                <th key={item?.id} style={{width: `${item?.width}%`}}>{item?.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {currentItems?.length !== 0 ? currentItems?.map((item: TEventList) => (
                            <tr className={`${dDayForm(item.date) < 0 && "bg-[#bdbdbdad] border-[#b3b3b3] hover:bg-[#bdbdbdad]"} cursor-pointer hover:bg-[#e7a8843e] border-b-[1px] border-solid border-[#cecece]`} key={item.id} onClick={handleClick}>
                                <td>{handleDDay(item.date)}</td>
                                <td>{item.eventName}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.location}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button className='align-middle text-center' onClick={handleDelete}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )) : <p className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>일치하는 이벤트가 없습니다.</p>}
                    </tbody>
                </table>
                <Pagenation
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </div> : 
            <div>
                <p className='w-full absolute'>등록된 이벤트가 없습니다.</p>
            </div>
            }

            <style>
                {`
                    th{
                        padding: 5px 5px 15px;
                        font-size: 16px;
                    }
                    td{
                        padding: 10px 5px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                `}
            </style>
        </div>
    )
}
