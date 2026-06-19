import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

import dotenv from "dotenv";

dotenv.config();

//create a rate limiter that allows 100 req per 1 min
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "10 s"),
});

export default ratelimit;