import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

type TProps = {
    selectedDate: Date | null | undefined;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
    disabled?: boolean;
}

export const DatePickerCont = ({
    selectedDate,
    setSelectedDate,
    disabled
}: TProps) => {

    return (
        <div className='relative'>
            <div className='absolute left-3 top-[55%] translate-y-[-50%] z-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#575757" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <DatePicker
                locale={ko}
                dateFormat='yyyy.MM.dd'
                shouldCloseOnSelect
                minDate={new Date('2000-01-01')}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className='custom-date-picker'
                placeholderText='날짜 검색하기'
                disabled={disabled}
            />

            <style>
                {`
                    .custom-date-picker{
                        background-color: rgb(238, 238, 238);
                        padding: 0.375rem 10px 0.375rem 20px;
                        border-radius: 10px;
                        border: 1px solid rgb(87, 87, 87);
                        outline: none;
                        width: 150px;
                        font-size: 18px;
                        text-align: center;
                        font-size: 16px;
                    }
                    .custom-date-picker::placeholder{
                        font-size: 16px;
                        color: #b4b4b4;
                    }
                    .custom-date-picker:disabled{
                        background-color: #cecece;
                    }
                `}
            </style>
        </div>
    )
}
