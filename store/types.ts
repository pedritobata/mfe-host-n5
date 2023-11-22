// State
export interface TranslateState {
  lang: string;
}

// Action
export interface Action<T>{
  type: string;
  payload: T;
}
