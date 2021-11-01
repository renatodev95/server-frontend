import { DataState } from '../enum/data-stage.enum';

export interface AppState<T> {
    data: DataState;
    appData?: T;
    error?: string;
}