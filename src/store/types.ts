export interface StateType {
    userStore: UserState;
}

// userSlice.ts
export interface UserState {
    token: string;
}
