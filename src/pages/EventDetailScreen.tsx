import React, { useEffect, useState } from 'react'
import { LayoutCont } from '../components/Layout/LayoutCont'
import { DetailCont } from '../components/common/DetailCont';
import { CustomInput } from '../components/common/CustomInput';
import { DatePickerCont } from '../components/common/DatePickerCont';
import { CustomButton } from '../components/common/CustomButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { CustomBackBtn } from '../components/common/CustomBackBtn';
import { TimePickerCont } from '../components/common/TimePickerCont';
import { TEventList } from '../api/types/eventList';
import { AxiosResponse } from 'axios';
import instance from '../api/axios';
import { Alert } from '../utils/alert';
import { dateForm } from '../utils/functions/dateForm';

export const EventDetailScreen = () => {

    const navigate = useNavigate();
    const locationData = useLocation();
    const type: string = locationData?.state?.type;
    const eventId: string = locationData?.state?.id;
    const [eventName, setEventName] = useState<string>("");
    const [date, setDate] = useState<Date | null | undefined>();
    const [time, setTime] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    // POST | PUT event
    const postEvent = async (method: string) => {
        if(eventName === "" || date === (null || undefined) || time === "" || location === "" || description === ""){
            Alert.error({
                title: "내용을 확인해주세요.",
            })
            return
        }
        const eventData = {
                eventName: eventName,
                date: dateForm(date),
                time: time,
                location: location,
                description: description
            }
        try{
            const res =  await (method === "post" ? instance.post("/event", eventData) : instance.put(`/event/${eventId}`, eventData));
            if(res.status === (method === "post" ? 201 : 200)){
                return true;
            }else{
                return false;
            }
        }catch(err){
            Alert.error({
                title: "에러가 발생했습니다."
            })
        }
    }
    const handleRegister = async (method: string) => {
        Alert.warning({
            title: method === "post" ? "이벤트를 등록하시겠습니까?" : "이벤트를 수정하시겠습니까?",
            action: async (result) => {
                if(result.isConfirmed){
                    const boolean = await postEvent(method);
                    if(boolean){
                        Alert.success({
                            title: method === "post" ? "등록이 완료되었습니다." : "수정이 완료되었습니다.",
                            action: () => {
                                method === "post" ? navigate("/") : setIsDisabled(true);
                            }
                        })
                    }
                }
            }
        })
    }
    // GET
    const getEventDetail = async () => {
        try{
            const res: AxiosResponse<TEventList> = await instance.get(`/event/${eventId}`);
            if(res.status === 200){
                setEventName(res.data.eventName);
                setDate(new Date(res.data.date));
                setTime(res.data.time);
                setLocation(res.data.location);
                setDescription(res.data.description);
            }
        }catch(err){
            Alert.error({
                title: "에러가 발생했습니다."
            })
        }
    }

    useEffect(() => {
        if(type === "detail"){
            setIsDisabled(true); 
            getEventDetail();
        }
    }, [])

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
                <TimePickerCont
                    selectedTime={time}
                    setSelectedTime={setTime}
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
                        onClick={() => handleRegister("post")}
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
                                onClick={() => handleRegister("put")}
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
