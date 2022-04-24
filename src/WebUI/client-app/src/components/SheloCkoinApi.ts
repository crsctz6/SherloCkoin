/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class CoinClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getCoinsWithPagination(pageNumber: number | undefined, pageSize: number | undefined, userIP: string | null | undefined): Promise<PaginatedListOfCoinListedDTO> {
        let url_ = this.baseUrl + "/api/Coin?";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "PageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (userIP !== undefined && userIP !== null)
            url_ += "UserIP=" + encodeURIComponent("" + userIP) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetCoinsWithPagination(_response);
        });
    }

    protected processGetCoinsWithPagination(response: Response): Promise<PaginatedListOfCoinListedDTO> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <PaginatedListOfCoinListedDTO>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PaginatedListOfCoinListedDTO>(<any>null);
    }

    create(command: CreateCoinCommand): Promise<number> {
        let url_ = this.baseUrl + "/api/Coin";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCreate(_response);
        });
    }

    protected processCreate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <number>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(<any>null);
    }

    getCoinDetails(id: number, userIP: string | null): Promise<CoinDetailsDTO> {
        let url_ = this.baseUrl + "/api/Coin/{id}/{userIP}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        if (userIP === undefined || userIP === null)
            throw new Error("The parameter 'userIP' must be defined.");
        url_ = url_.replace("{userIP}", encodeURIComponent("" + userIP));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetCoinDetails(_response);
        });
    }

    protected processGetCoinDetails(response: Response): Promise<CoinDetailsDTO> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <CoinDetailsDTO>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CoinDetailsDTO>(<any>null);
    }

    update(id: number, command: UpdateCoinCommand): Promise<FileResponse> {
        let url_ = this.baseUrl + "/api/Coin/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ = <RequestInit>{
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse>(<any>null);
    }

    delete(id: number): Promise<FileResponse> {
        let url_ = this.baseUrl + "/api/Coin/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDelete(_response);
        });
    }

    protected processDelete(response: Response): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse>(<any>null);
    }
}

export class VoteClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getVotesForCoinByUserIP(userIP: string | null | undefined, coinId: number | undefined): Promise<VoteDTO> {
        let url_ = this.baseUrl + "/api/Vote?";
        if (userIP !== undefined && userIP !== null)
            url_ += "UserIP=" + encodeURIComponent("" + userIP) + "&";
        if (coinId === null)
            throw new Error("The parameter 'coinId' cannot be null.");
        else if (coinId !== undefined)
            url_ += "CoinId=" + encodeURIComponent("" + coinId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetVotesForCoinByUserIP(_response);
        });
    }

    protected processGetVotesForCoinByUserIP(response: Response): Promise<VoteDTO> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <VoteDTO>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<VoteDTO>(<any>null);
    }

    create(command: CreateVoteCommand): Promise<number> {
        let url_ = this.baseUrl + "/api/Vote";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCreate(_response);
        });
    }

    protected processCreate(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <number>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(<any>null);
    }
}

export interface PaginatedListOfCoinListedDTO {
    items?: CoinListedDTO[] | undefined;
    pageIndex?: number;
    totalPages?: number;
    totalCount?: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
}

export interface CoinListedDTO {
    id?: number;
    logo?: string | undefined;
    name?: string | undefined;
    marketCap?: number;
    price?: number;
    launch?: string | undefined;
    votes?: number;
    isVoted?: boolean;
    isPromoted?: boolean;
}

export interface CoinDetailsDTO {
    id?: number;
    name?: string | undefined;
    symbol?: string | undefined;
    network?: string | undefined;
    isInPresale?: boolean;
    contractAddress?: string | undefined;
    description?: string | undefined;
    launchDate?: Date;
    customChartLink?: string | undefined;
    customSwapLink?: string | undefined;
    websiteLink?: string | undefined;
    telegramLink?: string | undefined;
    twitterLink?: string | undefined;
    discordLink?: string | undefined;
    votes?: number;
    lastDayVotes?: number;
    isVoted?: boolean;
    logo?: string | undefined;
    coinDetails?: CoinDetails | undefined;
    price?: number;
    launch?: string | undefined;
    marketCap?: number;
}

export interface CoinDetails {
    id?: number;
    coinRef?: number;
    marketCap?: number;
    launch?: string | undefined;
    price?: number;
    create?: Date;
}

export interface CreateCoinCommand {
    id?: number;
    name?: string | undefined;
    symbol?: string | undefined;
    network?: string | undefined;
    isInPresale?: boolean;
    contractAddress?: string | undefined;
    description?: string | undefined;
    launchDate?: Date;
    customChartLink?: string | undefined;
    customSwapLink?: string | undefined;
    websiteLink?: string | undefined;
    telegramLink?: string | undefined;
    twitterLink?: string | undefined;
    discordLink?: string | undefined;
}

export interface UpdateCoinCommand {
    id?: number;
    name?: string | undefined;
    symbol?: string | undefined;
    network?: string | undefined;
    isInPresale?: boolean;
    contractAddress?: string | undefined;
    description?: string | undefined;
    launchDate?: Date;
    customChartLink?: string | undefined;
    customSwapLink?: string | undefined;
    websiteLink?: string | undefined;
    telegramLink?: string | undefined;
    twitterLink?: string | undefined;
    discordLink?: string | undefined;
}

export interface VoteDTO {
    isVoted?: boolean;
}

export interface CreateVoteCommand {
    userIP?: string | undefined;
    coinId?: number;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}