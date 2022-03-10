import produce from './producer';
import consume from './consumer';

produce().catch((err) => console.error(`Producer error: ${err}`));

consume().catch((err) => console.error(`Consumer error: ${err}`))