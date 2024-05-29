import React, { useEffect, useState } from 'react'
import { LayoutCont } from '../components/Layout/LayoutCont'
import { DetailCont } from '../components/common/DetailCont';
import { CustomInput } from '../components/common/CustomInput';
import { DatePickerCont } from '../components/common/DatePickerCont';
import { CustomButton } from '../components/common/CustomButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { CustomBackBtn } from '../components/common/CustomBackBtn';

export const EventDetailScreen = () => {

    const navigate = useNavigate();
    const locationData = useLocation();
    const type = locationData.state.type;
    const [eventName, setEventName] = useState<string>("");
    const [date, setDate] = useState<Date | null | undefined>();
    const [time, setTime] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    useEffect(() => {
        type === "detail" && setIsDisabled(true);
    }, [type])

    return (
        <LayoutCont width={"600px"}>
            <CustomBackBtn />
            
            <DetailCont title={"이벤트명"}>
                <CustomInput
                    state={eventName}
                    setState={setEventName}
                    placeholder={"이벤트명을 입력해주세요."}
                    disabled={isDisabled}
                />
            </DetailCont>
            <DetailCont title={"날짜"}>
                <DatePickerCont
                    selectedDate={date}
                    setSelectedDate={setDate}
                    disabled={isDisabled}
                />
            </DetailCont>
            <DetailCont title={"시간"}>
                <CustomInput
                    state={time}
                    setState={setTime}
                    placeholder={"시간을 선택해주세요."}
                    disabled={isDisabled}
                />
            </DetailCont>
            <DetailCont title={"장소"}>
                <CustomInput
                    state={location}
                    setState={setLocation}
                    placeholder={"장소를 입력해주세요."}
                    disabled={isDisabled}
                />
            </DetailCont>
            <DetailCont title={"설명"}>
                <CustomInput
                    state={description}
                    setState={setDescription}
                    placeholder={"설명을 입력해주세요."}
                    disabled={isDisabled}
                    textarea={true}
                />
            </DetailCont>

            <div className='flex justify-center mt-3'>
                {type === "register" ?
                    <CustomButton
                        title={"등록하기"}
                        onClick={() => {}}
                        bgColor={"#e7a8847c"}
                    />:
                    <>
                    {isDisabled ? 
                        <CustomButton
                            title={"수정하기"}
                            onClick={() => setIsDisabled(false)}
                            bgColor={"#e7a8847c"}
                        /> : 
                        <>
                            <CustomButton
                                title={"취소"}
                                onClick={() => setIsDisabled(true)}
                                bgColor={"#c4c4c4"}
                            />
                            <CustomButton
                                title={"수정"}
                                onClick={() => {}}
                                bgColor={"#e7a8847c"}
                                ml={"10"}
                            />  
                        </>
                    }
                    </>
                }
            </div>
        </LayoutCont>
    )
}
