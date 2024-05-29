export interface StateType {
    userStore: UserState;
}

export interface UserState {
    searchDate: string | undefined;
    page: number
}
