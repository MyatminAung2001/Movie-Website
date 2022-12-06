const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: null,
                isAllow: true,
                error: false
            };
        
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isAllow: false,
                error: false
            };

        case "LOGIN_FAILURE":
            return {
                user: null,
                isAllow: false,
                error: true
            };

        case "LOGOUT":
            return {
                user: null,
                isAllow: true,
                error: false
            };

        default: 
            return {
                ...state
            }
    }
};

export default AuthReducer;