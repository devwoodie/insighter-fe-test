import React, { useEffect, useState } from 'react'
import { LayoutCont } from '../components/Layout/LayoutCont'
import { ListCont } from '../components/EventList/ListCont'
import instance from '../api/axios';
import { Alert } from '../utils/alert';
import { SearchInput } from '../components/EventList/SearchInput';
import { AxiosResponse } from 'axios';
import { TEventList } from '../api/types/eventList';
import { DatePickerCont } from '../components/common/DatePickerCont';

export const EventList = () => {

    const [list, setList] = useState<TEventList[]>([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedDate, setSelectedDate] = useState<Date | null>();

    const getEventList = async () => {
        try{
            const res: AxiosResponse<TEventList[]> = await instance.get("eventList.json");
            if(res.status === 200){
                setList(res.data);
            }
        }catch(err){
            Alert.error({
                title: "에러가 발생했습니다."
            })
        }
    }

    useEffect(() => {
        getEventList();
    }, [])

    return (
        <LayoutCont>
            <div className='flex justify-between items-center mb-5'>
                <span className='text-[#505050] text-[16px]'>[ Total <span className='text-[#000] font-black text-[16px]'>{list?.length}</span> ]</span>
                <div className='flex justify-end items-center'>
                    <DatePickerCont
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />
                    <button className='px-5 py-1.5 bg-primary text-[14px] rounded-lg ml-2 text-[#4f4f4f]'>검색</button>
                </div>
            </div>
            <SearchInput
                value={searchKeyword}
                setSearchKeyword={setSearchKeyword}
                setCurrentPage={setCurrentPage}
            />
            <ListCont 
                list={list} 
                searchKeyword={searchKeyword}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </LayoutCont>
    )
}
