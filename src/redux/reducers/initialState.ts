import TypeState from '../../constants/types/State';

const initialState: TypeState = {
    ROOT: {
        DRAWER: {
            OPEN: false,
        },
        THEME: false,
        LANG: 'tr-TR'
    },
    PAGES: {
        INDEX: {
            ALGORITHMS: null,
            SELECTED_ALGORITHM: null,
            STEPPER: {
                ACTIVE_STEP: 0
            },
            SWITCH_DATASET: true,
            OUT: null,
            FORMS: {
                DATASET: {
                    SPECIAL_DATASET: null,
                    RANDOM_DATASET: {
                        MIN: null,
                        MAX: null,
                        PIECE: null
                    },
                    SEARCHED: null,
                }
            }
        }
    }
};

export default initialState;