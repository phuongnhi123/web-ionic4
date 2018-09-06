

    export interface AvailableToBack {
        price: number;
        size: number;
    }

    export interface AvailableToLay {
        price: number;
        size: number;
    }

    export interface Exchanges {
        availableToBack: AvailableToBack[];
        availableToLay: AvailableToLay[];
        tradedVolume: any[];
        tradeHistory: any[];
    }

    export interface MetaData {
        runnerId: string;
    }

    export interface Runner {
        selectionId: number;
        runnerName: string;
        handicap: number;
        exchanges: Exchanges;
        metaData: MetaData;
        sortPriority: number;
        status: string;
        removalDate?: any;
        adjustmentFactor: number;
        silkNumber: string;
    }

    export interface LineRangeInfo {
        maxUnitValue: number;
        minUnitValue: number;
        interval: number;
        marketUnit: string;
    }

    export interface Market {
        currencyCode: string;
        marketId: string;
        eventName: string;
        eventFCName: string;
        openDate: number;
        inPlay: boolean;
        turnInPlayEnabled: boolean;
        totalMatched: number;
        marketType: string;
        marketName: string;
        bettingType: string;
        status: string;
        numberOfWinner: number;
        runners: Runner[];
        countOrders?: any;
        betDelay: number;
        bspMarket: boolean;
        complete: boolean;
        numberOfActiveRunners: number;
        eventId: string;
        exMarketType?: any;
        venue?: any;
        countryCode: string;
        sportId: string;
        sportName: string;
        lineRangeInfo: LineRangeInfo;
        eachWayDivisor: number;
    }


