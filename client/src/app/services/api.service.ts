import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

@Injectable()
export class ApiService {
    srcApiUrl;
    constructor(private http: Http, private httpClient: HttpClient) {
        // this.srcApiUrl = environment.baseUrl + environment.apiUrl + 'source/';
    }

    login(email, password) {
        const login_data = {
            email: email,
            password: password
        };
        return this.http
            .post('http://127.0.0.1:3000/api/login', login_data)
            .map((response: Response) => {
                return response.json();
            });
    }

    signup(email, password, name, timezone) {
        const login_data = {
            name: name,
            email: email,
            password: password,
            timezone: timezone
        };
        return this.http
            .post('http://127.0.0.1:3000/api/signup', login_data)
            .map((response: Response) => {
                return response.json();
            });
    }

    getUser(userId) {
        let token = localStorage.getItem('jwtToken');
        if (!token) {
            token = '';
        }
        const httpOptions = {
            headers: new HttpHeaders({ 'Authorization': token })
        };
        return this.httpClient
            .get('http://127.0.0.1:3000/api/user/' + userId, httpOptions)
            .map((response: Response) => {
                // console.log(response);
                return response;
            });
    }

    updateTZ(userId, timezone) {
        const timezoneObj = {
            timezone: timezone
        };
        return this.httpClient
            .post('http://127.0.0.1:3000/api/updatetz/' + userId, timezoneObj)
            .map((response: Response) => {
                // console.log(response);
                return response;
            });
    }

    makeReservation(userId, loggedIn, timeSlot, userName, loggedIn_name) {
        const objToSend = {
            userId: userId,
            userName: userName,
            loggedIn_name: loggedIn_name,
            loggedIn: loggedIn,
            timeSlot: timeSlot
        };
        return this.httpClient
            .post('http://127.0.0.1:3000/api/reserve/', objToSend)
            .map((response: Response) => {
                // console.log(response);
                return response;
            });
    }


}
