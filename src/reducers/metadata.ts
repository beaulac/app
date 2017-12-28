import { Actions, Types } from '../actions';
import { Metadata } from '../state';

export default function(
    state: Record<string, Metadata> = {},
    action: Actions,
): Record<string, Metadata> {
    switch (action.type) {
        case Types.UPDATE_METADATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}