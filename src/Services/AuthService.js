import callApi from '../Utils/ApiUtils';

export async function signUp(data) {
    return callApi("/api/signup","POST",data,null,true);
};

export async function signIn(data) {
    return callApi("/api/signin","POST",data,null,true);
};