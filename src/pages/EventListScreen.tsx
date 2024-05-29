import React, { useEffect, useState } from 'react'
import { LayoutCont } from '../components/Layout/LayoutCont'
import { ListCont } from '../components/EventList/ListCont'
import instance from '../api/axios';
import { Alert } from '../utils/alert';
import { SearchInput } from '../components/EventList/SearchInput';
import { AxiosResponse } from 'axios';
import { TEventList } from '../api/types/eventList';
import { DatePickerCont } from '../components/common/DatePickerCont';
import { CustomButton } from '../components/common/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchDate } from '../store/reducers/userSlice';
import { dateForm } from '../utils/functions/dateForm';
import { StateType } from '../store/types';

export const EventListScreen = () => {

    const diapatch = useDispatch();
    const navigate = useNavigate();
    const [list, setList] = useState<TEventList[]>([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedDate, setSelectedDate] = useState<Date | null | undefined>();
    const searchDate = useSelector((state: StateType) => state.userStore.searchDate);

    const getEventList = async () => {
        try{
            const res: AxiosResponse<TEventList[]> = await instance.get("/event");
            if(res.status === 200){
                setList(res.data);
            }
        }catch(err){
            Alert.error({
                title: "에러가 발생했습니다."
            })
        }
    }

    const handleDateSearch = () => {
        if(selectedDate === undefined){
            Alert.error({
                title: "날짜를 선택해주세요."
            })
        }else{
            const newDate = dateForm(selectedDate);
            diapatch(setSearchDate(newDate));
        }
    }
    const handleReload = () => {
        diapatch(setSearchDate(""));
        setSelectedDate(null);
    }

    useEffect(() => {
        getEventList();
        if(searchDate){
            setSelectedDate(new Date(searchDate));
        }
    }, [])

    return (
        <LayoutCont width={"100%"}>
            <SearchInput
                value={searchKeyword}
                setSearchKeyword={setSearchKeyword}
                setCurrentPage={setCurrentPage}
            />
            <div className='flex justify-between items-center mb-5'>
                <span className='text-[#505050] text-[16px]'>[ Total <span className='text-[#000] font-black text-[16px]'>{list?.length}</span> ]</span>
                <div className='flex justify-end items-center'>
                    <DatePickerCont
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />
                    <CustomButton
                        title={"검색"}
                        onClick={handleDateSearch}
                        bgColor={"#c4c4c4"}
                        ml={"10"}
                    />
                    <CustomButton
                        title={"새로고침"}
                        onClick={handleReload}
                        bgColor={"#c4c4c4"}
                        ml={"10"}
                    />
                    <CustomButton
                        title={"이벤트 등록"}
                        onClick={() => {navigate("/detail", {state: {"type": "register"}})}}
                        bgColor={"#e7a8847c"}
                        ml={"10"}
                    />
                </div>
            </div>
            <ListCont 
                list={list} 
                searchKeyword={searchKeyword}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </LayoutCont>
    )
}
