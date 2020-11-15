import { RateLimiterOptions } from './rate-limiter.interface'

export const defaultRateLimiterOptions: RateLimiterOptions = {
	for: 'Express',
	type: 'Memory',
	keyPrefix: 'global',
	points: 4,
	pointsConsumed: 1,
	inmemoryBlockOnConsumed: 0,
	duration: 1,
	blockDuration: 0,
	inmemoryBlockDuration: 0,
	queueEnabled: false,
	whiteList: [],
	blackList: [],
	storeClient: undefined,
	insuranceLimiter: undefined,
	storeType: undefined,
	dbName: 'rate-limiter',
	tableName: undefined,
	tableCreated: undefined,
	clearExpiredByTimeout: undefined,
	execEvenly: false,
	execEvenlyMinDelayMs: undefined,
	indexKeyPrefix: {},
	maxQueueSize: 100,
	errorMessage: 'Rate limit exceeded',
	limiterKey: undefined
}
