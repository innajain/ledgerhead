
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model account
 * 
 */
export type account = $Result.DefaultSelection<Prisma.$accountPayload>
/**
 * Model income_source
 * 
 */
export type income_source = $Result.DefaultSelection<Prisma.$income_sourcePayload>
/**
 * Model expense_item
 * 
 */
export type expense_item = $Result.DefaultSelection<Prisma.$expense_itemPayload>
/**
 * Model mutual_fund
 * 
 */
export type mutual_fund = $Result.DefaultSelection<Prisma.$mutual_fundPayload>
/**
 * Model units_lot
 * 
 */
export type units_lot = $Result.DefaultSelection<Prisma.$units_lotPayload>
/**
 * Model investment_transaction
 * 
 */
export type investment_transaction = $Result.DefaultSelection<Prisma.$investment_transactionPayload>
/**
 * Model redemption_transaction
 * 
 */
export type redemption_transaction = $Result.DefaultSelection<Prisma.$redemption_transactionPayload>
/**
 * Model redemption_bucket
 * 
 */
export type redemption_bucket = $Result.DefaultSelection<Prisma.$redemption_bucketPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model transfer_transaction
 * 
 */
export type transfer_transaction = $Result.DefaultSelection<Prisma.$transfer_transactionPayload>
/**
 * Model expense_transaction
 * 
 */
export type expense_transaction = $Result.DefaultSelection<Prisma.$expense_transactionPayload>
/**
 * Model income_transaction
 * 
 */
export type income_transaction = $Result.DefaultSelection<Prisma.$income_transactionPayload>
/**
 * Model db_history
 * 
 */
export type db_history = $Result.DefaultSelection<Prisma.$db_historyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const transaction_type: {
  TRANSFER: 'TRANSFER',
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  MF_INVESTMENT: 'MF_INVESTMENT',
  MF_REDEMPTION: 'MF_REDEMPTION'
};

export type transaction_type = (typeof transaction_type)[keyof typeof transaction_type]


export const to_or_from: {
  FROM: 'FROM',
  TO: 'TO'
};

export type to_or_from = (typeof to_or_from)[keyof typeof to_or_from]


export const db_history_event_type: {
  CREATE: 'CREATE',
  MODIFY: 'MODIFY',
  DELETE: 'DELETE',
  RESTORE: 'RESTORE',
  INIT: 'INIT'
};

export type db_history_event_type = (typeof db_history_event_type)[keyof typeof db_history_event_type]


export const db_history_entity_type: {
  ACCOUNT: 'ACCOUNT',
  INCOME_SOURCE: 'INCOME_SOURCE',
  EXPENSE_ITEM: 'EXPENSE_ITEM',
  MUTUAL_FUND: 'MUTUAL_FUND',
  TRANSFER_TRANSACTION: 'TRANSFER_TRANSACTION',
  EXPENSE_TRANSACTION: 'EXPENSE_TRANSACTION',
  INCOME_TRANSACTION: 'INCOME_TRANSACTION',
  ACCOUNT_TRANSACTION: 'ACCOUNT_TRANSACTION',
  INVESTMENT_TRANSACTION: 'INVESTMENT_TRANSACTION',
  REDEMPTION_TRANSACTION: 'REDEMPTION_TRANSACTION',
  DB_HISTORY: 'DB_HISTORY'
};

export type db_history_entity_type = (typeof db_history_entity_type)[keyof typeof db_history_entity_type]

}

export type transaction_type = $Enums.transaction_type

export const transaction_type: typeof $Enums.transaction_type

export type to_or_from = $Enums.to_or_from

export const to_or_from: typeof $Enums.to_or_from

export type db_history_event_type = $Enums.db_history_event_type

export const db_history_event_type: typeof $Enums.db_history_event_type

export type db_history_entity_type = $Enums.db_history_entity_type

export const db_history_entity_type: typeof $Enums.db_history_entity_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.income_source`: Exposes CRUD operations for the **income_source** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Income_sources
    * const income_sources = await prisma.income_source.findMany()
    * ```
    */
  get income_source(): Prisma.income_sourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense_item`: Exposes CRUD operations for the **expense_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expense_items
    * const expense_items = await prisma.expense_item.findMany()
    * ```
    */
  get expense_item(): Prisma.expense_itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mutual_fund`: Exposes CRUD operations for the **mutual_fund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mutual_funds
    * const mutual_funds = await prisma.mutual_fund.findMany()
    * ```
    */
  get mutual_fund(): Prisma.mutual_fundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.units_lot`: Exposes CRUD operations for the **units_lot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units_lots
    * const units_lots = await prisma.units_lot.findMany()
    * ```
    */
  get units_lot(): Prisma.units_lotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investment_transaction`: Exposes CRUD operations for the **investment_transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investment_transactions
    * const investment_transactions = await prisma.investment_transaction.findMany()
    * ```
    */
  get investment_transaction(): Prisma.investment_transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.redemption_transaction`: Exposes CRUD operations for the **redemption_transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Redemption_transactions
    * const redemption_transactions = await prisma.redemption_transaction.findMany()
    * ```
    */
  get redemption_transaction(): Prisma.redemption_transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.redemption_bucket`: Exposes CRUD operations for the **redemption_bucket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Redemption_buckets
    * const redemption_buckets = await prisma.redemption_bucket.findMany()
    * ```
    */
  get redemption_bucket(): Prisma.redemption_bucketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transfer_transaction`: Exposes CRUD operations for the **transfer_transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transfer_transactions
    * const transfer_transactions = await prisma.transfer_transaction.findMany()
    * ```
    */
  get transfer_transaction(): Prisma.transfer_transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense_transaction`: Exposes CRUD operations for the **expense_transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expense_transactions
    * const expense_transactions = await prisma.expense_transaction.findMany()
    * ```
    */
  get expense_transaction(): Prisma.expense_transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.income_transaction`: Exposes CRUD operations for the **income_transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Income_transactions
    * const income_transactions = await prisma.income_transaction.findMany()
    * ```
    */
  get income_transaction(): Prisma.income_transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.db_history`: Exposes CRUD operations for the **db_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Db_histories
    * const db_histories = await prisma.db_history.findMany()
    * ```
    */
  get db_history(): Prisma.db_historyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    account: 'account',
    income_source: 'income_source',
    expense_item: 'expense_item',
    mutual_fund: 'mutual_fund',
    units_lot: 'units_lot',
    investment_transaction: 'investment_transaction',
    redemption_transaction: 'redemption_transaction',
    redemption_bucket: 'redemption_bucket',
    transaction: 'transaction',
    transfer_transaction: 'transfer_transaction',
    expense_transaction: 'expense_transaction',
    income_transaction: 'income_transaction',
    db_history: 'db_history'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "income_source" | "expense_item" | "mutual_fund" | "units_lot" | "investment_transaction" | "redemption_transaction" | "redemption_bucket" | "transaction" | "transfer_transaction" | "expense_transaction" | "income_transaction" | "db_history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      account: {
        payload: Prisma.$accountPayload<ExtArgs>
        fields: Prisma.accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findFirst: {
            args: Prisma.accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findMany: {
            args: Prisma.accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          create: {
            args: Prisma.accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          createMany: {
            args: Prisma.accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          delete: {
            args: Prisma.accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          update: {
            args: Prisma.accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          deleteMany: {
            args: Prisma.accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          upsert: {
            args: Prisma.accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      income_source: {
        payload: Prisma.$income_sourcePayload<ExtArgs>
        fields: Prisma.income_sourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.income_sourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_sourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.income_sourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_sourcePayload>
          }
          findFirst: {
            args: Prisma.income_sourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_sourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.income_sourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_sourcePayload>
          }
          findMany: {
            args: Prisma.income_sourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_sourcePayload>[]
          }
          create: {
            args: Prisma.income_sourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_sourcePayload>
          }
          createMany: {
            args: Prisma.income_sourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.income_sourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_sourcePayload>[]
          }
          delete: {
            args: Prisma.income_sourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_sourcePayload>
          }
          update: {
            args: Prisma.income_sourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_sourcePayload>
          }
          deleteMany: {
            args: Prisma.income_sourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.income_sourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.income_sourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_sourcePayload>[]
          }
          upsert: {
            args: Prisma.income_sourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_sourcePayload>
          }
          aggregate: {
            args: Prisma.Income_sourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncome_source>
          }
          groupBy: {
            args: Prisma.income_sourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<Income_sourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.income_sourceCountArgs<ExtArgs>
            result: $Utils.Optional<Income_sourceCountAggregateOutputType> | number
          }
        }
      }
      expense_item: {
        payload: Prisma.$expense_itemPayload<ExtArgs>
        fields: Prisma.expense_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expense_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expense_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_itemPayload>
          }
          findFirst: {
            args: Prisma.expense_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expense_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_itemPayload>
          }
          findMany: {
            args: Prisma.expense_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_itemPayload>[]
          }
          create: {
            args: Prisma.expense_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_itemPayload>
          }
          createMany: {
            args: Prisma.expense_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.expense_itemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_itemPayload>[]
          }
          delete: {
            args: Prisma.expense_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_itemPayload>
          }
          update: {
            args: Prisma.expense_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_itemPayload>
          }
          deleteMany: {
            args: Prisma.expense_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expense_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.expense_itemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_itemPayload>[]
          }
          upsert: {
            args: Prisma.expense_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_itemPayload>
          }
          aggregate: {
            args: Prisma.Expense_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense_item>
          }
          groupBy: {
            args: Prisma.expense_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Expense_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.expense_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Expense_itemCountAggregateOutputType> | number
          }
        }
      }
      mutual_fund: {
        payload: Prisma.$mutual_fundPayload<ExtArgs>
        fields: Prisma.mutual_fundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mutual_fundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mutual_fundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mutual_fundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mutual_fundPayload>
          }
          findFirst: {
            args: Prisma.mutual_fundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mutual_fundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mutual_fundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mutual_fundPayload>
          }
          findMany: {
            args: Prisma.mutual_fundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mutual_fundPayload>[]
          }
          create: {
            args: Prisma.mutual_fundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mutual_fundPayload>
          }
          createMany: {
            args: Prisma.mutual_fundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mutual_fundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mutual_fundPayload>[]
          }
          delete: {
            args: Prisma.mutual_fundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mutual_fundPayload>
          }
          update: {
            args: Prisma.mutual_fundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mutual_fundPayload>
          }
          deleteMany: {
            args: Prisma.mutual_fundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mutual_fundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mutual_fundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mutual_fundPayload>[]
          }
          upsert: {
            args: Prisma.mutual_fundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mutual_fundPayload>
          }
          aggregate: {
            args: Prisma.Mutual_fundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMutual_fund>
          }
          groupBy: {
            args: Prisma.mutual_fundGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mutual_fundGroupByOutputType>[]
          }
          count: {
            args: Prisma.mutual_fundCountArgs<ExtArgs>
            result: $Utils.Optional<Mutual_fundCountAggregateOutputType> | number
          }
        }
      }
      units_lot: {
        payload: Prisma.$units_lotPayload<ExtArgs>
        fields: Prisma.units_lotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.units_lotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$units_lotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.units_lotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$units_lotPayload>
          }
          findFirst: {
            args: Prisma.units_lotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$units_lotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.units_lotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$units_lotPayload>
          }
          findMany: {
            args: Prisma.units_lotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$units_lotPayload>[]
          }
          create: {
            args: Prisma.units_lotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$units_lotPayload>
          }
          createMany: {
            args: Prisma.units_lotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.units_lotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$units_lotPayload>[]
          }
          delete: {
            args: Prisma.units_lotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$units_lotPayload>
          }
          update: {
            args: Prisma.units_lotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$units_lotPayload>
          }
          deleteMany: {
            args: Prisma.units_lotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.units_lotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.units_lotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$units_lotPayload>[]
          }
          upsert: {
            args: Prisma.units_lotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$units_lotPayload>
          }
          aggregate: {
            args: Prisma.Units_lotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnits_lot>
          }
          groupBy: {
            args: Prisma.units_lotGroupByArgs<ExtArgs>
            result: $Utils.Optional<Units_lotGroupByOutputType>[]
          }
          count: {
            args: Prisma.units_lotCountArgs<ExtArgs>
            result: $Utils.Optional<Units_lotCountAggregateOutputType> | number
          }
        }
      }
      investment_transaction: {
        payload: Prisma.$investment_transactionPayload<ExtArgs>
        fields: Prisma.investment_transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.investment_transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.investment_transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_transactionPayload>
          }
          findFirst: {
            args: Prisma.investment_transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.investment_transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_transactionPayload>
          }
          findMany: {
            args: Prisma.investment_transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_transactionPayload>[]
          }
          create: {
            args: Prisma.investment_transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_transactionPayload>
          }
          createMany: {
            args: Prisma.investment_transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.investment_transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_transactionPayload>[]
          }
          delete: {
            args: Prisma.investment_transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_transactionPayload>
          }
          update: {
            args: Prisma.investment_transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_transactionPayload>
          }
          deleteMany: {
            args: Prisma.investment_transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.investment_transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.investment_transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_transactionPayload>[]
          }
          upsert: {
            args: Prisma.investment_transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$investment_transactionPayload>
          }
          aggregate: {
            args: Prisma.Investment_transactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment_transaction>
          }
          groupBy: {
            args: Prisma.investment_transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Investment_transactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.investment_transactionCountArgs<ExtArgs>
            result: $Utils.Optional<Investment_transactionCountAggregateOutputType> | number
          }
        }
      }
      redemption_transaction: {
        payload: Prisma.$redemption_transactionPayload<ExtArgs>
        fields: Prisma.redemption_transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.redemption_transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.redemption_transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_transactionPayload>
          }
          findFirst: {
            args: Prisma.redemption_transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.redemption_transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_transactionPayload>
          }
          findMany: {
            args: Prisma.redemption_transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_transactionPayload>[]
          }
          create: {
            args: Prisma.redemption_transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_transactionPayload>
          }
          createMany: {
            args: Prisma.redemption_transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.redemption_transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_transactionPayload>[]
          }
          delete: {
            args: Prisma.redemption_transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_transactionPayload>
          }
          update: {
            args: Prisma.redemption_transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_transactionPayload>
          }
          deleteMany: {
            args: Prisma.redemption_transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.redemption_transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.redemption_transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_transactionPayload>[]
          }
          upsert: {
            args: Prisma.redemption_transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_transactionPayload>
          }
          aggregate: {
            args: Prisma.Redemption_transactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRedemption_transaction>
          }
          groupBy: {
            args: Prisma.redemption_transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Redemption_transactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.redemption_transactionCountArgs<ExtArgs>
            result: $Utils.Optional<Redemption_transactionCountAggregateOutputType> | number
          }
        }
      }
      redemption_bucket: {
        payload: Prisma.$redemption_bucketPayload<ExtArgs>
        fields: Prisma.redemption_bucketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.redemption_bucketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_bucketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.redemption_bucketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_bucketPayload>
          }
          findFirst: {
            args: Prisma.redemption_bucketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_bucketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.redemption_bucketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_bucketPayload>
          }
          findMany: {
            args: Prisma.redemption_bucketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_bucketPayload>[]
          }
          create: {
            args: Prisma.redemption_bucketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_bucketPayload>
          }
          createMany: {
            args: Prisma.redemption_bucketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.redemption_bucketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_bucketPayload>[]
          }
          delete: {
            args: Prisma.redemption_bucketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_bucketPayload>
          }
          update: {
            args: Prisma.redemption_bucketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_bucketPayload>
          }
          deleteMany: {
            args: Prisma.redemption_bucketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.redemption_bucketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.redemption_bucketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_bucketPayload>[]
          }
          upsert: {
            args: Prisma.redemption_bucketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$redemption_bucketPayload>
          }
          aggregate: {
            args: Prisma.Redemption_bucketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRedemption_bucket>
          }
          groupBy: {
            args: Prisma.redemption_bucketGroupByArgs<ExtArgs>
            result: $Utils.Optional<Redemption_bucketGroupByOutputType>[]
          }
          count: {
            args: Prisma.redemption_bucketCountArgs<ExtArgs>
            result: $Utils.Optional<Redemption_bucketCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      transfer_transaction: {
        payload: Prisma.$transfer_transactionPayload<ExtArgs>
        fields: Prisma.transfer_transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transfer_transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfer_transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transfer_transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfer_transactionPayload>
          }
          findFirst: {
            args: Prisma.transfer_transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfer_transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transfer_transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfer_transactionPayload>
          }
          findMany: {
            args: Prisma.transfer_transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfer_transactionPayload>[]
          }
          create: {
            args: Prisma.transfer_transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfer_transactionPayload>
          }
          createMany: {
            args: Prisma.transfer_transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transfer_transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfer_transactionPayload>[]
          }
          delete: {
            args: Prisma.transfer_transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfer_transactionPayload>
          }
          update: {
            args: Prisma.transfer_transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfer_transactionPayload>
          }
          deleteMany: {
            args: Prisma.transfer_transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transfer_transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transfer_transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfer_transactionPayload>[]
          }
          upsert: {
            args: Prisma.transfer_transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfer_transactionPayload>
          }
          aggregate: {
            args: Prisma.Transfer_transactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransfer_transaction>
          }
          groupBy: {
            args: Prisma.transfer_transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transfer_transactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transfer_transactionCountArgs<ExtArgs>
            result: $Utils.Optional<Transfer_transactionCountAggregateOutputType> | number
          }
        }
      }
      expense_transaction: {
        payload: Prisma.$expense_transactionPayload<ExtArgs>
        fields: Prisma.expense_transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expense_transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expense_transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_transactionPayload>
          }
          findFirst: {
            args: Prisma.expense_transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expense_transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_transactionPayload>
          }
          findMany: {
            args: Prisma.expense_transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_transactionPayload>[]
          }
          create: {
            args: Prisma.expense_transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_transactionPayload>
          }
          createMany: {
            args: Prisma.expense_transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.expense_transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_transactionPayload>[]
          }
          delete: {
            args: Prisma.expense_transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_transactionPayload>
          }
          update: {
            args: Prisma.expense_transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_transactionPayload>
          }
          deleteMany: {
            args: Prisma.expense_transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expense_transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.expense_transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_transactionPayload>[]
          }
          upsert: {
            args: Prisma.expense_transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_transactionPayload>
          }
          aggregate: {
            args: Prisma.Expense_transactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense_transaction>
          }
          groupBy: {
            args: Prisma.expense_transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Expense_transactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.expense_transactionCountArgs<ExtArgs>
            result: $Utils.Optional<Expense_transactionCountAggregateOutputType> | number
          }
        }
      }
      income_transaction: {
        payload: Prisma.$income_transactionPayload<ExtArgs>
        fields: Prisma.income_transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.income_transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.income_transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_transactionPayload>
          }
          findFirst: {
            args: Prisma.income_transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.income_transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_transactionPayload>
          }
          findMany: {
            args: Prisma.income_transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_transactionPayload>[]
          }
          create: {
            args: Prisma.income_transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_transactionPayload>
          }
          createMany: {
            args: Prisma.income_transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.income_transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_transactionPayload>[]
          }
          delete: {
            args: Prisma.income_transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_transactionPayload>
          }
          update: {
            args: Prisma.income_transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_transactionPayload>
          }
          deleteMany: {
            args: Prisma.income_transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.income_transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.income_transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_transactionPayload>[]
          }
          upsert: {
            args: Prisma.income_transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$income_transactionPayload>
          }
          aggregate: {
            args: Prisma.Income_transactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncome_transaction>
          }
          groupBy: {
            args: Prisma.income_transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Income_transactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.income_transactionCountArgs<ExtArgs>
            result: $Utils.Optional<Income_transactionCountAggregateOutputType> | number
          }
        }
      }
      db_history: {
        payload: Prisma.$db_historyPayload<ExtArgs>
        fields: Prisma.db_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.db_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.db_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_historyPayload>
          }
          findFirst: {
            args: Prisma.db_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.db_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_historyPayload>
          }
          findMany: {
            args: Prisma.db_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_historyPayload>[]
          }
          create: {
            args: Prisma.db_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_historyPayload>
          }
          createMany: {
            args: Prisma.db_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.db_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_historyPayload>[]
          }
          delete: {
            args: Prisma.db_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_historyPayload>
          }
          update: {
            args: Prisma.db_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_historyPayload>
          }
          deleteMany: {
            args: Prisma.db_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.db_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.db_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_historyPayload>[]
          }
          upsert: {
            args: Prisma.db_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$db_historyPayload>
          }
          aggregate: {
            args: Prisma.Db_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDb_history>
          }
          groupBy: {
            args: Prisma.db_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Db_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.db_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Db_historyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: accountOmit
    income_source?: income_sourceOmit
    expense_item?: expense_itemOmit
    mutual_fund?: mutual_fundOmit
    units_lot?: units_lotOmit
    investment_transaction?: investment_transactionOmit
    redemption_transaction?: redemption_transactionOmit
    redemption_bucket?: redemption_bucketOmit
    transaction?: transactionOmit
    transfer_transaction?: transfer_transactionOmit
    expense_transaction?: expense_transactionOmit
    income_transaction?: income_transactionOmit
    db_history?: db_historyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    from_transfers: number
    to_transfers: number
    income_transactions: number
    expense_transactions: number
    investment_transactions: number
    redemption_transactions: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from_transfers?: boolean | AccountCountOutputTypeCountFrom_transfersArgs
    to_transfers?: boolean | AccountCountOutputTypeCountTo_transfersArgs
    income_transactions?: boolean | AccountCountOutputTypeCountIncome_transactionsArgs
    expense_transactions?: boolean | AccountCountOutputTypeCountExpense_transactionsArgs
    investment_transactions?: boolean | AccountCountOutputTypeCountInvestment_transactionsArgs
    redemption_transactions?: boolean | AccountCountOutputTypeCountRedemption_transactionsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountFrom_transfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transfer_transactionWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTo_transfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transfer_transactionWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountIncome_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: income_transactionWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountExpense_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expense_transactionWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountInvestment_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: investment_transactionWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountRedemption_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: redemption_transactionWhereInput
  }


  /**
   * Count Type Income_sourceCountOutputType
   */

  export type Income_sourceCountOutputType = {
    transactions: number
  }

  export type Income_sourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Income_sourceCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * Income_sourceCountOutputType without action
   */
  export type Income_sourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income_sourceCountOutputType
     */
    select?: Income_sourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Income_sourceCountOutputType without action
   */
  export type Income_sourceCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: income_transactionWhereInput
  }


  /**
   * Count Type Expense_itemCountOutputType
   */

  export type Expense_itemCountOutputType = {
    transactions: number
  }

  export type Expense_itemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Expense_itemCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * Expense_itemCountOutputType without action
   */
  export type Expense_itemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense_itemCountOutputType
     */
    select?: Expense_itemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Expense_itemCountOutputType without action
   */
  export type Expense_itemCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expense_transactionWhereInput
  }


  /**
   * Count Type Mutual_fundCountOutputType
   */

  export type Mutual_fundCountOutputType = {
    units_lots: number
  }

  export type Mutual_fundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units_lots?: boolean | Mutual_fundCountOutputTypeCountUnits_lotsArgs
  }

  // Custom InputTypes
  /**
   * Mutual_fundCountOutputType without action
   */
  export type Mutual_fundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mutual_fundCountOutputType
     */
    select?: Mutual_fundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Mutual_fundCountOutputType without action
   */
  export type Mutual_fundCountOutputTypeCountUnits_lotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: units_lotWhereInput
  }


  /**
   * Count Type Units_lotCountOutputType
   */

  export type Units_lotCountOutputType = {
    redemption_buckets: number
  }

  export type Units_lotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemption_buckets?: boolean | Units_lotCountOutputTypeCountRedemption_bucketsArgs
  }

  // Custom InputTypes
  /**
   * Units_lotCountOutputType without action
   */
  export type Units_lotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Units_lotCountOutputType
     */
    select?: Units_lotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Units_lotCountOutputType without action
   */
  export type Units_lotCountOutputTypeCountRedemption_bucketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: redemption_bucketWhereInput
  }


  /**
   * Count Type Redemption_transactionCountOutputType
   */

  export type Redemption_transactionCountOutputType = {
    redemption_buckets: number
  }

  export type Redemption_transactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemption_buckets?: boolean | Redemption_transactionCountOutputTypeCountRedemption_bucketsArgs
  }

  // Custom InputTypes
  /**
   * Redemption_transactionCountOutputType without action
   */
  export type Redemption_transactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Redemption_transactionCountOutputType
     */
    select?: Redemption_transactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Redemption_transactionCountOutputType without action
   */
  export type Redemption_transactionCountOutputTypeCountRedemption_bucketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: redemption_bucketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    group: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    group: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    group: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    group?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    group?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    group?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account to aggregate.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
    orderBy?: accountOrderByWithAggregationInput | accountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    name: string
    group: string
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group?: boolean
    from_transfers?: boolean | account$from_transfersArgs<ExtArgs>
    to_transfers?: boolean | account$to_transfersArgs<ExtArgs>
    income_transactions?: boolean | account$income_transactionsArgs<ExtArgs>
    expense_transactions?: boolean | account$expense_transactionsArgs<ExtArgs>
    investment_transactions?: boolean | account$investment_transactionsArgs<ExtArgs>
    redemption_transactions?: boolean | account$redemption_transactionsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group?: boolean
  }, ExtArgs["result"]["account"]>

  export type accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group?: boolean
  }, ExtArgs["result"]["account"]>

  export type accountSelectScalar = {
    id?: boolean
    name?: boolean
    group?: boolean
  }

  export type accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "group", ExtArgs["result"]["account"]>
  export type accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from_transfers?: boolean | account$from_transfersArgs<ExtArgs>
    to_transfers?: boolean | account$to_transfersArgs<ExtArgs>
    income_transactions?: boolean | account$income_transactionsArgs<ExtArgs>
    expense_transactions?: boolean | account$expense_transactionsArgs<ExtArgs>
    investment_transactions?: boolean | account$investment_transactionsArgs<ExtArgs>
    redemption_transactions?: boolean | account$redemption_transactionsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account"
    objects: {
      from_transfers: Prisma.$transfer_transactionPayload<ExtArgs>[]
      to_transfers: Prisma.$transfer_transactionPayload<ExtArgs>[]
      income_transactions: Prisma.$income_transactionPayload<ExtArgs>[]
      expense_transactions: Prisma.$expense_transactionPayload<ExtArgs>[]
      investment_transactions: Prisma.$investment_transactionPayload<ExtArgs>[]
      redemption_transactions: Prisma.$redemption_transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      group: string
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type accountGetPayload<S extends boolean | null | undefined | accountDefaultArgs> = $Result.GetResult<Prisma.$accountPayload, S>

  type accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account'], meta: { name: 'account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {accountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountFindUniqueArgs>(args: SelectSubset<T, accountFindUniqueArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountFindUniqueOrThrowArgs>(args: SelectSubset<T, accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountFindFirstArgs>(args?: SelectSubset<T, accountFindFirstArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountFindFirstOrThrowArgs>(args?: SelectSubset<T, accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountFindManyArgs>(args?: SelectSubset<T, accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {accountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends accountCreateArgs>(args: SelectSubset<T, accountCreateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountCreateManyArgs>(args?: SelectSubset<T, accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountCreateManyAndReturnArgs>(args?: SelectSubset<T, accountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {accountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends accountDeleteArgs>(args: SelectSubset<T, accountDeleteArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {accountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountUpdateArgs>(args: SelectSubset<T, accountUpdateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountDeleteManyArgs>(args?: SelectSubset<T, accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountUpdateManyArgs>(args: SelectSubset<T, accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {accountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accountUpdateManyAndReturnArgs>(args: SelectSubset<T, accountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {accountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends accountUpsertArgs>(args: SelectSubset<T, accountUpsertArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountCountArgs>(
      args?: Subset<T, accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountGroupByArgs['orderBy'] }
        : { orderBy?: accountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account model
   */
  readonly fields: accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from_transfers<T extends account$from_transfersArgs<ExtArgs> = {}>(args?: Subset<T, account$from_transfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    to_transfers<T extends account$to_transfersArgs<ExtArgs> = {}>(args?: Subset<T, account$to_transfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    income_transactions<T extends account$income_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, account$income_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expense_transactions<T extends account$expense_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, account$expense_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    investment_transactions<T extends account$investment_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, account$investment_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    redemption_transactions<T extends account$redemption_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, account$redemption_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the account model
   */
  interface accountFieldRefs {
    readonly id: FieldRef<"account", 'String'>
    readonly name: FieldRef<"account", 'String'>
    readonly group: FieldRef<"account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * account findUnique
   */
  export type accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findUniqueOrThrow
   */
  export type accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findFirst
   */
  export type accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findFirstOrThrow
   */
  export type accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findMany
   */
  export type accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account create
   */
  export type accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to create a account.
     */
    data: XOR<accountCreateInput, accountUncheckedCreateInput>
  }

  /**
   * account createMany
   */
  export type accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
  }

  /**
   * account createManyAndReturn
   */
  export type accountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
  }

  /**
   * account update
   */
  export type accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to update a account.
     */
    data: XOR<accountUpdateInput, accountUncheckedUpdateInput>
    /**
     * Choose, which account to update.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account updateMany
   */
  export type accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * account updateManyAndReturn
   */
  export type accountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * account upsert
   */
  export type accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The filter to search for the account to update in case it exists.
     */
    where: accountWhereUniqueInput
    /**
     * In case the account found by the `where` argument doesn't exist, create a new account with this data.
     */
    create: XOR<accountCreateInput, accountUncheckedCreateInput>
    /**
     * In case the account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountUpdateInput, accountUncheckedUpdateInput>
  }

  /**
   * account delete
   */
  export type accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter which account to delete.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account deleteMany
   */
  export type accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * account.from_transfers
   */
  export type account$from_transfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    where?: transfer_transactionWhereInput
    orderBy?: transfer_transactionOrderByWithRelationInput | transfer_transactionOrderByWithRelationInput[]
    cursor?: transfer_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transfer_transactionScalarFieldEnum | Transfer_transactionScalarFieldEnum[]
  }

  /**
   * account.to_transfers
   */
  export type account$to_transfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    where?: transfer_transactionWhereInput
    orderBy?: transfer_transactionOrderByWithRelationInput | transfer_transactionOrderByWithRelationInput[]
    cursor?: transfer_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transfer_transactionScalarFieldEnum | Transfer_transactionScalarFieldEnum[]
  }

  /**
   * account.income_transactions
   */
  export type account$income_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    where?: income_transactionWhereInput
    orderBy?: income_transactionOrderByWithRelationInput | income_transactionOrderByWithRelationInput[]
    cursor?: income_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Income_transactionScalarFieldEnum | Income_transactionScalarFieldEnum[]
  }

  /**
   * account.expense_transactions
   */
  export type account$expense_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    where?: expense_transactionWhereInput
    orderBy?: expense_transactionOrderByWithRelationInput | expense_transactionOrderByWithRelationInput[]
    cursor?: expense_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Expense_transactionScalarFieldEnum | Expense_transactionScalarFieldEnum[]
  }

  /**
   * account.investment_transactions
   */
  export type account$investment_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    where?: investment_transactionWhereInput
    orderBy?: investment_transactionOrderByWithRelationInput | investment_transactionOrderByWithRelationInput[]
    cursor?: investment_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Investment_transactionScalarFieldEnum | Investment_transactionScalarFieldEnum[]
  }

  /**
   * account.redemption_transactions
   */
  export type account$redemption_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
    where?: redemption_transactionWhereInput
    orderBy?: redemption_transactionOrderByWithRelationInput | redemption_transactionOrderByWithRelationInput[]
    cursor?: redemption_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Redemption_transactionScalarFieldEnum | Redemption_transactionScalarFieldEnum[]
  }

  /**
   * account without action
   */
  export type accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
  }


  /**
   * Model income_source
   */

  export type AggregateIncome_source = {
    _count: Income_sourceCountAggregateOutputType | null
    _min: Income_sourceMinAggregateOutputType | null
    _max: Income_sourceMaxAggregateOutputType | null
  }

  export type Income_sourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    group: string | null
  }

  export type Income_sourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    group: string | null
  }

  export type Income_sourceCountAggregateOutputType = {
    id: number
    name: number
    group: number
    _all: number
  }


  export type Income_sourceMinAggregateInputType = {
    id?: true
    name?: true
    group?: true
  }

  export type Income_sourceMaxAggregateInputType = {
    id?: true
    name?: true
    group?: true
  }

  export type Income_sourceCountAggregateInputType = {
    id?: true
    name?: true
    group?: true
    _all?: true
  }

  export type Income_sourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which income_source to aggregate.
     */
    where?: income_sourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of income_sources to fetch.
     */
    orderBy?: income_sourceOrderByWithRelationInput | income_sourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: income_sourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` income_sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` income_sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned income_sources
    **/
    _count?: true | Income_sourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Income_sourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Income_sourceMaxAggregateInputType
  }

  export type GetIncome_sourceAggregateType<T extends Income_sourceAggregateArgs> = {
        [P in keyof T & keyof AggregateIncome_source]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncome_source[P]>
      : GetScalarType<T[P], AggregateIncome_source[P]>
  }




  export type income_sourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: income_sourceWhereInput
    orderBy?: income_sourceOrderByWithAggregationInput | income_sourceOrderByWithAggregationInput[]
    by: Income_sourceScalarFieldEnum[] | Income_sourceScalarFieldEnum
    having?: income_sourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Income_sourceCountAggregateInputType | true
    _min?: Income_sourceMinAggregateInputType
    _max?: Income_sourceMaxAggregateInputType
  }

  export type Income_sourceGroupByOutputType = {
    id: string
    name: string
    group: string
    _count: Income_sourceCountAggregateOutputType | null
    _min: Income_sourceMinAggregateOutputType | null
    _max: Income_sourceMaxAggregateOutputType | null
  }

  type GetIncome_sourceGroupByPayload<T extends income_sourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Income_sourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Income_sourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Income_sourceGroupByOutputType[P]>
            : GetScalarType<T[P], Income_sourceGroupByOutputType[P]>
        }
      >
    >


  export type income_sourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group?: boolean
    transactions?: boolean | income_source$transactionsArgs<ExtArgs>
    _count?: boolean | Income_sourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income_source"]>

  export type income_sourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group?: boolean
  }, ExtArgs["result"]["income_source"]>

  export type income_sourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group?: boolean
  }, ExtArgs["result"]["income_source"]>

  export type income_sourceSelectScalar = {
    id?: boolean
    name?: boolean
    group?: boolean
  }

  export type income_sourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "group", ExtArgs["result"]["income_source"]>
  export type income_sourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | income_source$transactionsArgs<ExtArgs>
    _count?: boolean | Income_sourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type income_sourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type income_sourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $income_sourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "income_source"
    objects: {
      transactions: Prisma.$income_transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      group: string
    }, ExtArgs["result"]["income_source"]>
    composites: {}
  }

  type income_sourceGetPayload<S extends boolean | null | undefined | income_sourceDefaultArgs> = $Result.GetResult<Prisma.$income_sourcePayload, S>

  type income_sourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<income_sourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Income_sourceCountAggregateInputType | true
    }

  export interface income_sourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['income_source'], meta: { name: 'income_source' } }
    /**
     * Find zero or one Income_source that matches the filter.
     * @param {income_sourceFindUniqueArgs} args - Arguments to find a Income_source
     * @example
     * // Get one Income_source
     * const income_source = await prisma.income_source.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends income_sourceFindUniqueArgs>(args: SelectSubset<T, income_sourceFindUniqueArgs<ExtArgs>>): Prisma__income_sourceClient<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Income_source that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {income_sourceFindUniqueOrThrowArgs} args - Arguments to find a Income_source
     * @example
     * // Get one Income_source
     * const income_source = await prisma.income_source.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends income_sourceFindUniqueOrThrowArgs>(args: SelectSubset<T, income_sourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__income_sourceClient<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income_source that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_sourceFindFirstArgs} args - Arguments to find a Income_source
     * @example
     * // Get one Income_source
     * const income_source = await prisma.income_source.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends income_sourceFindFirstArgs>(args?: SelectSubset<T, income_sourceFindFirstArgs<ExtArgs>>): Prisma__income_sourceClient<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income_source that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_sourceFindFirstOrThrowArgs} args - Arguments to find a Income_source
     * @example
     * // Get one Income_source
     * const income_source = await prisma.income_source.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends income_sourceFindFirstOrThrowArgs>(args?: SelectSubset<T, income_sourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__income_sourceClient<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Income_sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_sourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Income_sources
     * const income_sources = await prisma.income_source.findMany()
     * 
     * // Get first 10 Income_sources
     * const income_sources = await prisma.income_source.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const income_sourceWithIdOnly = await prisma.income_source.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends income_sourceFindManyArgs>(args?: SelectSubset<T, income_sourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Income_source.
     * @param {income_sourceCreateArgs} args - Arguments to create a Income_source.
     * @example
     * // Create one Income_source
     * const Income_source = await prisma.income_source.create({
     *   data: {
     *     // ... data to create a Income_source
     *   }
     * })
     * 
     */
    create<T extends income_sourceCreateArgs>(args: SelectSubset<T, income_sourceCreateArgs<ExtArgs>>): Prisma__income_sourceClient<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Income_sources.
     * @param {income_sourceCreateManyArgs} args - Arguments to create many Income_sources.
     * @example
     * // Create many Income_sources
     * const income_source = await prisma.income_source.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends income_sourceCreateManyArgs>(args?: SelectSubset<T, income_sourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Income_sources and returns the data saved in the database.
     * @param {income_sourceCreateManyAndReturnArgs} args - Arguments to create many Income_sources.
     * @example
     * // Create many Income_sources
     * const income_source = await prisma.income_source.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Income_sources and only return the `id`
     * const income_sourceWithIdOnly = await prisma.income_source.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends income_sourceCreateManyAndReturnArgs>(args?: SelectSubset<T, income_sourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Income_source.
     * @param {income_sourceDeleteArgs} args - Arguments to delete one Income_source.
     * @example
     * // Delete one Income_source
     * const Income_source = await prisma.income_source.delete({
     *   where: {
     *     // ... filter to delete one Income_source
     *   }
     * })
     * 
     */
    delete<T extends income_sourceDeleteArgs>(args: SelectSubset<T, income_sourceDeleteArgs<ExtArgs>>): Prisma__income_sourceClient<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Income_source.
     * @param {income_sourceUpdateArgs} args - Arguments to update one Income_source.
     * @example
     * // Update one Income_source
     * const income_source = await prisma.income_source.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends income_sourceUpdateArgs>(args: SelectSubset<T, income_sourceUpdateArgs<ExtArgs>>): Prisma__income_sourceClient<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Income_sources.
     * @param {income_sourceDeleteManyArgs} args - Arguments to filter Income_sources to delete.
     * @example
     * // Delete a few Income_sources
     * const { count } = await prisma.income_source.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends income_sourceDeleteManyArgs>(args?: SelectSubset<T, income_sourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Income_sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_sourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Income_sources
     * const income_source = await prisma.income_source.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends income_sourceUpdateManyArgs>(args: SelectSubset<T, income_sourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Income_sources and returns the data updated in the database.
     * @param {income_sourceUpdateManyAndReturnArgs} args - Arguments to update many Income_sources.
     * @example
     * // Update many Income_sources
     * const income_source = await prisma.income_source.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Income_sources and only return the `id`
     * const income_sourceWithIdOnly = await prisma.income_source.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends income_sourceUpdateManyAndReturnArgs>(args: SelectSubset<T, income_sourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Income_source.
     * @param {income_sourceUpsertArgs} args - Arguments to update or create a Income_source.
     * @example
     * // Update or create a Income_source
     * const income_source = await prisma.income_source.upsert({
     *   create: {
     *     // ... data to create a Income_source
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Income_source we want to update
     *   }
     * })
     */
    upsert<T extends income_sourceUpsertArgs>(args: SelectSubset<T, income_sourceUpsertArgs<ExtArgs>>): Prisma__income_sourceClient<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Income_sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_sourceCountArgs} args - Arguments to filter Income_sources to count.
     * @example
     * // Count the number of Income_sources
     * const count = await prisma.income_source.count({
     *   where: {
     *     // ... the filter for the Income_sources we want to count
     *   }
     * })
    **/
    count<T extends income_sourceCountArgs>(
      args?: Subset<T, income_sourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Income_sourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Income_source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Income_sourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Income_sourceAggregateArgs>(args: Subset<T, Income_sourceAggregateArgs>): Prisma.PrismaPromise<GetIncome_sourceAggregateType<T>>

    /**
     * Group by Income_source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_sourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends income_sourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: income_sourceGroupByArgs['orderBy'] }
        : { orderBy?: income_sourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, income_sourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncome_sourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the income_source model
   */
  readonly fields: income_sourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for income_source.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__income_sourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends income_source$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, income_source$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the income_source model
   */
  interface income_sourceFieldRefs {
    readonly id: FieldRef<"income_source", 'String'>
    readonly name: FieldRef<"income_source", 'String'>
    readonly group: FieldRef<"income_source", 'String'>
  }
    

  // Custom InputTypes
  /**
   * income_source findUnique
   */
  export type income_sourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_sourceInclude<ExtArgs> | null
    /**
     * Filter, which income_source to fetch.
     */
    where: income_sourceWhereUniqueInput
  }

  /**
   * income_source findUniqueOrThrow
   */
  export type income_sourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_sourceInclude<ExtArgs> | null
    /**
     * Filter, which income_source to fetch.
     */
    where: income_sourceWhereUniqueInput
  }

  /**
   * income_source findFirst
   */
  export type income_sourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_sourceInclude<ExtArgs> | null
    /**
     * Filter, which income_source to fetch.
     */
    where?: income_sourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of income_sources to fetch.
     */
    orderBy?: income_sourceOrderByWithRelationInput | income_sourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for income_sources.
     */
    cursor?: income_sourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` income_sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` income_sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of income_sources.
     */
    distinct?: Income_sourceScalarFieldEnum | Income_sourceScalarFieldEnum[]
  }

  /**
   * income_source findFirstOrThrow
   */
  export type income_sourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_sourceInclude<ExtArgs> | null
    /**
     * Filter, which income_source to fetch.
     */
    where?: income_sourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of income_sources to fetch.
     */
    orderBy?: income_sourceOrderByWithRelationInput | income_sourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for income_sources.
     */
    cursor?: income_sourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` income_sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` income_sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of income_sources.
     */
    distinct?: Income_sourceScalarFieldEnum | Income_sourceScalarFieldEnum[]
  }

  /**
   * income_source findMany
   */
  export type income_sourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_sourceInclude<ExtArgs> | null
    /**
     * Filter, which income_sources to fetch.
     */
    where?: income_sourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of income_sources to fetch.
     */
    orderBy?: income_sourceOrderByWithRelationInput | income_sourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing income_sources.
     */
    cursor?: income_sourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` income_sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` income_sources.
     */
    skip?: number
    distinct?: Income_sourceScalarFieldEnum | Income_sourceScalarFieldEnum[]
  }

  /**
   * income_source create
   */
  export type income_sourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_sourceInclude<ExtArgs> | null
    /**
     * The data needed to create a income_source.
     */
    data: XOR<income_sourceCreateInput, income_sourceUncheckedCreateInput>
  }

  /**
   * income_source createMany
   */
  export type income_sourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many income_sources.
     */
    data: income_sourceCreateManyInput | income_sourceCreateManyInput[]
  }

  /**
   * income_source createManyAndReturn
   */
  export type income_sourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * The data used to create many income_sources.
     */
    data: income_sourceCreateManyInput | income_sourceCreateManyInput[]
  }

  /**
   * income_source update
   */
  export type income_sourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_sourceInclude<ExtArgs> | null
    /**
     * The data needed to update a income_source.
     */
    data: XOR<income_sourceUpdateInput, income_sourceUncheckedUpdateInput>
    /**
     * Choose, which income_source to update.
     */
    where: income_sourceWhereUniqueInput
  }

  /**
   * income_source updateMany
   */
  export type income_sourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update income_sources.
     */
    data: XOR<income_sourceUpdateManyMutationInput, income_sourceUncheckedUpdateManyInput>
    /**
     * Filter which income_sources to update
     */
    where?: income_sourceWhereInput
    /**
     * Limit how many income_sources to update.
     */
    limit?: number
  }

  /**
   * income_source updateManyAndReturn
   */
  export type income_sourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * The data used to update income_sources.
     */
    data: XOR<income_sourceUpdateManyMutationInput, income_sourceUncheckedUpdateManyInput>
    /**
     * Filter which income_sources to update
     */
    where?: income_sourceWhereInput
    /**
     * Limit how many income_sources to update.
     */
    limit?: number
  }

  /**
   * income_source upsert
   */
  export type income_sourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_sourceInclude<ExtArgs> | null
    /**
     * The filter to search for the income_source to update in case it exists.
     */
    where: income_sourceWhereUniqueInput
    /**
     * In case the income_source found by the `where` argument doesn't exist, create a new income_source with this data.
     */
    create: XOR<income_sourceCreateInput, income_sourceUncheckedCreateInput>
    /**
     * In case the income_source was found with the provided `where` argument, update it with this data.
     */
    update: XOR<income_sourceUpdateInput, income_sourceUncheckedUpdateInput>
  }

  /**
   * income_source delete
   */
  export type income_sourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_sourceInclude<ExtArgs> | null
    /**
     * Filter which income_source to delete.
     */
    where: income_sourceWhereUniqueInput
  }

  /**
   * income_source deleteMany
   */
  export type income_sourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which income_sources to delete
     */
    where?: income_sourceWhereInput
    /**
     * Limit how many income_sources to delete.
     */
    limit?: number
  }

  /**
   * income_source.transactions
   */
  export type income_source$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    where?: income_transactionWhereInput
    orderBy?: income_transactionOrderByWithRelationInput | income_transactionOrderByWithRelationInput[]
    cursor?: income_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Income_transactionScalarFieldEnum | Income_transactionScalarFieldEnum[]
  }

  /**
   * income_source without action
   */
  export type income_sourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_source
     */
    select?: income_sourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_source
     */
    omit?: income_sourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_sourceInclude<ExtArgs> | null
  }


  /**
   * Model expense_item
   */

  export type AggregateExpense_item = {
    _count: Expense_itemCountAggregateOutputType | null
    _min: Expense_itemMinAggregateOutputType | null
    _max: Expense_itemMaxAggregateOutputType | null
  }

  export type Expense_itemMinAggregateOutputType = {
    id: string | null
    name: string | null
    group: string | null
  }

  export type Expense_itemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    group: string | null
  }

  export type Expense_itemCountAggregateOutputType = {
    id: number
    name: number
    group: number
    _all: number
  }


  export type Expense_itemMinAggregateInputType = {
    id?: true
    name?: true
    group?: true
  }

  export type Expense_itemMaxAggregateInputType = {
    id?: true
    name?: true
    group?: true
  }

  export type Expense_itemCountAggregateInputType = {
    id?: true
    name?: true
    group?: true
    _all?: true
  }

  export type Expense_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense_item to aggregate.
     */
    where?: expense_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_items to fetch.
     */
    orderBy?: expense_itemOrderByWithRelationInput | expense_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expense_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expense_items
    **/
    _count?: true | Expense_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Expense_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Expense_itemMaxAggregateInputType
  }

  export type GetExpense_itemAggregateType<T extends Expense_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense_item[P]>
      : GetScalarType<T[P], AggregateExpense_item[P]>
  }




  export type expense_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expense_itemWhereInput
    orderBy?: expense_itemOrderByWithAggregationInput | expense_itemOrderByWithAggregationInput[]
    by: Expense_itemScalarFieldEnum[] | Expense_itemScalarFieldEnum
    having?: expense_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Expense_itemCountAggregateInputType | true
    _min?: Expense_itemMinAggregateInputType
    _max?: Expense_itemMaxAggregateInputType
  }

  export type Expense_itemGroupByOutputType = {
    id: string
    name: string
    group: string
    _count: Expense_itemCountAggregateOutputType | null
    _min: Expense_itemMinAggregateOutputType | null
    _max: Expense_itemMaxAggregateOutputType | null
  }

  type GetExpense_itemGroupByPayload<T extends expense_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Expense_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Expense_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Expense_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Expense_itemGroupByOutputType[P]>
        }
      >
    >


  export type expense_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group?: boolean
    transactions?: boolean | expense_item$transactionsArgs<ExtArgs>
    _count?: boolean | Expense_itemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense_item"]>

  export type expense_itemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group?: boolean
  }, ExtArgs["result"]["expense_item"]>

  export type expense_itemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group?: boolean
  }, ExtArgs["result"]["expense_item"]>

  export type expense_itemSelectScalar = {
    id?: boolean
    name?: boolean
    group?: boolean
  }

  export type expense_itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "group", ExtArgs["result"]["expense_item"]>
  export type expense_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | expense_item$transactionsArgs<ExtArgs>
    _count?: boolean | Expense_itemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type expense_itemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type expense_itemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $expense_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expense_item"
    objects: {
      transactions: Prisma.$expense_transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      group: string
    }, ExtArgs["result"]["expense_item"]>
    composites: {}
  }

  type expense_itemGetPayload<S extends boolean | null | undefined | expense_itemDefaultArgs> = $Result.GetResult<Prisma.$expense_itemPayload, S>

  type expense_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expense_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Expense_itemCountAggregateInputType | true
    }

  export interface expense_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expense_item'], meta: { name: 'expense_item' } }
    /**
     * Find zero or one Expense_item that matches the filter.
     * @param {expense_itemFindUniqueArgs} args - Arguments to find a Expense_item
     * @example
     * // Get one Expense_item
     * const expense_item = await prisma.expense_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expense_itemFindUniqueArgs>(args: SelectSubset<T, expense_itemFindUniqueArgs<ExtArgs>>): Prisma__expense_itemClient<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense_item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expense_itemFindUniqueOrThrowArgs} args - Arguments to find a Expense_item
     * @example
     * // Get one Expense_item
     * const expense_item = await prisma.expense_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expense_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, expense_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expense_itemClient<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_itemFindFirstArgs} args - Arguments to find a Expense_item
     * @example
     * // Get one Expense_item
     * const expense_item = await prisma.expense_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expense_itemFindFirstArgs>(args?: SelectSubset<T, expense_itemFindFirstArgs<ExtArgs>>): Prisma__expense_itemClient<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_itemFindFirstOrThrowArgs} args - Arguments to find a Expense_item
     * @example
     * // Get one Expense_item
     * const expense_item = await prisma.expense_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expense_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, expense_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__expense_itemClient<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expense_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expense_items
     * const expense_items = await prisma.expense_item.findMany()
     * 
     * // Get first 10 Expense_items
     * const expense_items = await prisma.expense_item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expense_itemWithIdOnly = await prisma.expense_item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expense_itemFindManyArgs>(args?: SelectSubset<T, expense_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense_item.
     * @param {expense_itemCreateArgs} args - Arguments to create a Expense_item.
     * @example
     * // Create one Expense_item
     * const Expense_item = await prisma.expense_item.create({
     *   data: {
     *     // ... data to create a Expense_item
     *   }
     * })
     * 
     */
    create<T extends expense_itemCreateArgs>(args: SelectSubset<T, expense_itemCreateArgs<ExtArgs>>): Prisma__expense_itemClient<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expense_items.
     * @param {expense_itemCreateManyArgs} args - Arguments to create many Expense_items.
     * @example
     * // Create many Expense_items
     * const expense_item = await prisma.expense_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expense_itemCreateManyArgs>(args?: SelectSubset<T, expense_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expense_items and returns the data saved in the database.
     * @param {expense_itemCreateManyAndReturnArgs} args - Arguments to create many Expense_items.
     * @example
     * // Create many Expense_items
     * const expense_item = await prisma.expense_item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expense_items and only return the `id`
     * const expense_itemWithIdOnly = await prisma.expense_item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends expense_itemCreateManyAndReturnArgs>(args?: SelectSubset<T, expense_itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense_item.
     * @param {expense_itemDeleteArgs} args - Arguments to delete one Expense_item.
     * @example
     * // Delete one Expense_item
     * const Expense_item = await prisma.expense_item.delete({
     *   where: {
     *     // ... filter to delete one Expense_item
     *   }
     * })
     * 
     */
    delete<T extends expense_itemDeleteArgs>(args: SelectSubset<T, expense_itemDeleteArgs<ExtArgs>>): Prisma__expense_itemClient<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense_item.
     * @param {expense_itemUpdateArgs} args - Arguments to update one Expense_item.
     * @example
     * // Update one Expense_item
     * const expense_item = await prisma.expense_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expense_itemUpdateArgs>(args: SelectSubset<T, expense_itemUpdateArgs<ExtArgs>>): Prisma__expense_itemClient<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expense_items.
     * @param {expense_itemDeleteManyArgs} args - Arguments to filter Expense_items to delete.
     * @example
     * // Delete a few Expense_items
     * const { count } = await prisma.expense_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expense_itemDeleteManyArgs>(args?: SelectSubset<T, expense_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expense_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expense_items
     * const expense_item = await prisma.expense_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expense_itemUpdateManyArgs>(args: SelectSubset<T, expense_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expense_items and returns the data updated in the database.
     * @param {expense_itemUpdateManyAndReturnArgs} args - Arguments to update many Expense_items.
     * @example
     * // Update many Expense_items
     * const expense_item = await prisma.expense_item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expense_items and only return the `id`
     * const expense_itemWithIdOnly = await prisma.expense_item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends expense_itemUpdateManyAndReturnArgs>(args: SelectSubset<T, expense_itemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense_item.
     * @param {expense_itemUpsertArgs} args - Arguments to update or create a Expense_item.
     * @example
     * // Update or create a Expense_item
     * const expense_item = await prisma.expense_item.upsert({
     *   create: {
     *     // ... data to create a Expense_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense_item we want to update
     *   }
     * })
     */
    upsert<T extends expense_itemUpsertArgs>(args: SelectSubset<T, expense_itemUpsertArgs<ExtArgs>>): Prisma__expense_itemClient<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expense_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_itemCountArgs} args - Arguments to filter Expense_items to count.
     * @example
     * // Count the number of Expense_items
     * const count = await prisma.expense_item.count({
     *   where: {
     *     // ... the filter for the Expense_items we want to count
     *   }
     * })
    **/
    count<T extends expense_itemCountArgs>(
      args?: Subset<T, expense_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Expense_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Expense_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Expense_itemAggregateArgs>(args: Subset<T, Expense_itemAggregateArgs>): Prisma.PrismaPromise<GetExpense_itemAggregateType<T>>

    /**
     * Group by Expense_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends expense_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expense_itemGroupByArgs['orderBy'] }
        : { orderBy?: expense_itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, expense_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpense_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expense_item model
   */
  readonly fields: expense_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expense_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expense_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends expense_item$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, expense_item$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the expense_item model
   */
  interface expense_itemFieldRefs {
    readonly id: FieldRef<"expense_item", 'String'>
    readonly name: FieldRef<"expense_item", 'String'>
    readonly group: FieldRef<"expense_item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * expense_item findUnique
   */
  export type expense_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_itemInclude<ExtArgs> | null
    /**
     * Filter, which expense_item to fetch.
     */
    where: expense_itemWhereUniqueInput
  }

  /**
   * expense_item findUniqueOrThrow
   */
  export type expense_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_itemInclude<ExtArgs> | null
    /**
     * Filter, which expense_item to fetch.
     */
    where: expense_itemWhereUniqueInput
  }

  /**
   * expense_item findFirst
   */
  export type expense_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_itemInclude<ExtArgs> | null
    /**
     * Filter, which expense_item to fetch.
     */
    where?: expense_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_items to fetch.
     */
    orderBy?: expense_itemOrderByWithRelationInput | expense_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expense_items.
     */
    cursor?: expense_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expense_items.
     */
    distinct?: Expense_itemScalarFieldEnum | Expense_itemScalarFieldEnum[]
  }

  /**
   * expense_item findFirstOrThrow
   */
  export type expense_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_itemInclude<ExtArgs> | null
    /**
     * Filter, which expense_item to fetch.
     */
    where?: expense_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_items to fetch.
     */
    orderBy?: expense_itemOrderByWithRelationInput | expense_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expense_items.
     */
    cursor?: expense_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expense_items.
     */
    distinct?: Expense_itemScalarFieldEnum | Expense_itemScalarFieldEnum[]
  }

  /**
   * expense_item findMany
   */
  export type expense_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_itemInclude<ExtArgs> | null
    /**
     * Filter, which expense_items to fetch.
     */
    where?: expense_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_items to fetch.
     */
    orderBy?: expense_itemOrderByWithRelationInput | expense_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expense_items.
     */
    cursor?: expense_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_items.
     */
    skip?: number
    distinct?: Expense_itemScalarFieldEnum | Expense_itemScalarFieldEnum[]
  }

  /**
   * expense_item create
   */
  export type expense_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_itemInclude<ExtArgs> | null
    /**
     * The data needed to create a expense_item.
     */
    data: XOR<expense_itemCreateInput, expense_itemUncheckedCreateInput>
  }

  /**
   * expense_item createMany
   */
  export type expense_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expense_items.
     */
    data: expense_itemCreateManyInput | expense_itemCreateManyInput[]
  }

  /**
   * expense_item createManyAndReturn
   */
  export type expense_itemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * The data used to create many expense_items.
     */
    data: expense_itemCreateManyInput | expense_itemCreateManyInput[]
  }

  /**
   * expense_item update
   */
  export type expense_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_itemInclude<ExtArgs> | null
    /**
     * The data needed to update a expense_item.
     */
    data: XOR<expense_itemUpdateInput, expense_itemUncheckedUpdateInput>
    /**
     * Choose, which expense_item to update.
     */
    where: expense_itemWhereUniqueInput
  }

  /**
   * expense_item updateMany
   */
  export type expense_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expense_items.
     */
    data: XOR<expense_itemUpdateManyMutationInput, expense_itemUncheckedUpdateManyInput>
    /**
     * Filter which expense_items to update
     */
    where?: expense_itemWhereInput
    /**
     * Limit how many expense_items to update.
     */
    limit?: number
  }

  /**
   * expense_item updateManyAndReturn
   */
  export type expense_itemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * The data used to update expense_items.
     */
    data: XOR<expense_itemUpdateManyMutationInput, expense_itemUncheckedUpdateManyInput>
    /**
     * Filter which expense_items to update
     */
    where?: expense_itemWhereInput
    /**
     * Limit how many expense_items to update.
     */
    limit?: number
  }

  /**
   * expense_item upsert
   */
  export type expense_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_itemInclude<ExtArgs> | null
    /**
     * The filter to search for the expense_item to update in case it exists.
     */
    where: expense_itemWhereUniqueInput
    /**
     * In case the expense_item found by the `where` argument doesn't exist, create a new expense_item with this data.
     */
    create: XOR<expense_itemCreateInput, expense_itemUncheckedCreateInput>
    /**
     * In case the expense_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expense_itemUpdateInput, expense_itemUncheckedUpdateInput>
  }

  /**
   * expense_item delete
   */
  export type expense_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_itemInclude<ExtArgs> | null
    /**
     * Filter which expense_item to delete.
     */
    where: expense_itemWhereUniqueInput
  }

  /**
   * expense_item deleteMany
   */
  export type expense_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense_items to delete
     */
    where?: expense_itemWhereInput
    /**
     * Limit how many expense_items to delete.
     */
    limit?: number
  }

  /**
   * expense_item.transactions
   */
  export type expense_item$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    where?: expense_transactionWhereInput
    orderBy?: expense_transactionOrderByWithRelationInput | expense_transactionOrderByWithRelationInput[]
    cursor?: expense_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Expense_transactionScalarFieldEnum | Expense_transactionScalarFieldEnum[]
  }

  /**
   * expense_item without action
   */
  export type expense_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_item
     */
    select?: expense_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_item
     */
    omit?: expense_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_itemInclude<ExtArgs> | null
  }


  /**
   * Model mutual_fund
   */

  export type AggregateMutual_fund = {
    _count: Mutual_fundCountAggregateOutputType | null
    _min: Mutual_fundMinAggregateOutputType | null
    _max: Mutual_fundMaxAggregateOutputType | null
  }

  export type Mutual_fundMinAggregateOutputType = {
    id: string | null
    name: string | null
    isin: string | null
  }

  export type Mutual_fundMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isin: string | null
  }

  export type Mutual_fundCountAggregateOutputType = {
    id: number
    name: number
    isin: number
    _all: number
  }


  export type Mutual_fundMinAggregateInputType = {
    id?: true
    name?: true
    isin?: true
  }

  export type Mutual_fundMaxAggregateInputType = {
    id?: true
    name?: true
    isin?: true
  }

  export type Mutual_fundCountAggregateInputType = {
    id?: true
    name?: true
    isin?: true
    _all?: true
  }

  export type Mutual_fundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mutual_fund to aggregate.
     */
    where?: mutual_fundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mutual_funds to fetch.
     */
    orderBy?: mutual_fundOrderByWithRelationInput | mutual_fundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mutual_fundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mutual_funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mutual_funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mutual_funds
    **/
    _count?: true | Mutual_fundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mutual_fundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mutual_fundMaxAggregateInputType
  }

  export type GetMutual_fundAggregateType<T extends Mutual_fundAggregateArgs> = {
        [P in keyof T & keyof AggregateMutual_fund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMutual_fund[P]>
      : GetScalarType<T[P], AggregateMutual_fund[P]>
  }




  export type mutual_fundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mutual_fundWhereInput
    orderBy?: mutual_fundOrderByWithAggregationInput | mutual_fundOrderByWithAggregationInput[]
    by: Mutual_fundScalarFieldEnum[] | Mutual_fundScalarFieldEnum
    having?: mutual_fundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mutual_fundCountAggregateInputType | true
    _min?: Mutual_fundMinAggregateInputType
    _max?: Mutual_fundMaxAggregateInputType
  }

  export type Mutual_fundGroupByOutputType = {
    id: string
    name: string
    isin: string
    _count: Mutual_fundCountAggregateOutputType | null
    _min: Mutual_fundMinAggregateOutputType | null
    _max: Mutual_fundMaxAggregateOutputType | null
  }

  type GetMutual_fundGroupByPayload<T extends mutual_fundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mutual_fundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mutual_fundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mutual_fundGroupByOutputType[P]>
            : GetScalarType<T[P], Mutual_fundGroupByOutputType[P]>
        }
      >
    >


  export type mutual_fundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isin?: boolean
    units_lots?: boolean | mutual_fund$units_lotsArgs<ExtArgs>
    _count?: boolean | Mutual_fundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mutual_fund"]>

  export type mutual_fundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isin?: boolean
  }, ExtArgs["result"]["mutual_fund"]>

  export type mutual_fundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isin?: boolean
  }, ExtArgs["result"]["mutual_fund"]>

  export type mutual_fundSelectScalar = {
    id?: boolean
    name?: boolean
    isin?: boolean
  }

  export type mutual_fundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isin", ExtArgs["result"]["mutual_fund"]>
  export type mutual_fundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units_lots?: boolean | mutual_fund$units_lotsArgs<ExtArgs>
    _count?: boolean | Mutual_fundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mutual_fundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type mutual_fundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $mutual_fundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mutual_fund"
    objects: {
      units_lots: Prisma.$units_lotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isin: string
    }, ExtArgs["result"]["mutual_fund"]>
    composites: {}
  }

  type mutual_fundGetPayload<S extends boolean | null | undefined | mutual_fundDefaultArgs> = $Result.GetResult<Prisma.$mutual_fundPayload, S>

  type mutual_fundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mutual_fundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mutual_fundCountAggregateInputType | true
    }

  export interface mutual_fundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mutual_fund'], meta: { name: 'mutual_fund' } }
    /**
     * Find zero or one Mutual_fund that matches the filter.
     * @param {mutual_fundFindUniqueArgs} args - Arguments to find a Mutual_fund
     * @example
     * // Get one Mutual_fund
     * const mutual_fund = await prisma.mutual_fund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mutual_fundFindUniqueArgs>(args: SelectSubset<T, mutual_fundFindUniqueArgs<ExtArgs>>): Prisma__mutual_fundClient<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mutual_fund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mutual_fundFindUniqueOrThrowArgs} args - Arguments to find a Mutual_fund
     * @example
     * // Get one Mutual_fund
     * const mutual_fund = await prisma.mutual_fund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mutual_fundFindUniqueOrThrowArgs>(args: SelectSubset<T, mutual_fundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mutual_fundClient<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mutual_fund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mutual_fundFindFirstArgs} args - Arguments to find a Mutual_fund
     * @example
     * // Get one Mutual_fund
     * const mutual_fund = await prisma.mutual_fund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mutual_fundFindFirstArgs>(args?: SelectSubset<T, mutual_fundFindFirstArgs<ExtArgs>>): Prisma__mutual_fundClient<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mutual_fund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mutual_fundFindFirstOrThrowArgs} args - Arguments to find a Mutual_fund
     * @example
     * // Get one Mutual_fund
     * const mutual_fund = await prisma.mutual_fund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mutual_fundFindFirstOrThrowArgs>(args?: SelectSubset<T, mutual_fundFindFirstOrThrowArgs<ExtArgs>>): Prisma__mutual_fundClient<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mutual_funds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mutual_fundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mutual_funds
     * const mutual_funds = await prisma.mutual_fund.findMany()
     * 
     * // Get first 10 Mutual_funds
     * const mutual_funds = await prisma.mutual_fund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mutual_fundWithIdOnly = await prisma.mutual_fund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mutual_fundFindManyArgs>(args?: SelectSubset<T, mutual_fundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mutual_fund.
     * @param {mutual_fundCreateArgs} args - Arguments to create a Mutual_fund.
     * @example
     * // Create one Mutual_fund
     * const Mutual_fund = await prisma.mutual_fund.create({
     *   data: {
     *     // ... data to create a Mutual_fund
     *   }
     * })
     * 
     */
    create<T extends mutual_fundCreateArgs>(args: SelectSubset<T, mutual_fundCreateArgs<ExtArgs>>): Prisma__mutual_fundClient<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mutual_funds.
     * @param {mutual_fundCreateManyArgs} args - Arguments to create many Mutual_funds.
     * @example
     * // Create many Mutual_funds
     * const mutual_fund = await prisma.mutual_fund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mutual_fundCreateManyArgs>(args?: SelectSubset<T, mutual_fundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mutual_funds and returns the data saved in the database.
     * @param {mutual_fundCreateManyAndReturnArgs} args - Arguments to create many Mutual_funds.
     * @example
     * // Create many Mutual_funds
     * const mutual_fund = await prisma.mutual_fund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mutual_funds and only return the `id`
     * const mutual_fundWithIdOnly = await prisma.mutual_fund.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mutual_fundCreateManyAndReturnArgs>(args?: SelectSubset<T, mutual_fundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mutual_fund.
     * @param {mutual_fundDeleteArgs} args - Arguments to delete one Mutual_fund.
     * @example
     * // Delete one Mutual_fund
     * const Mutual_fund = await prisma.mutual_fund.delete({
     *   where: {
     *     // ... filter to delete one Mutual_fund
     *   }
     * })
     * 
     */
    delete<T extends mutual_fundDeleteArgs>(args: SelectSubset<T, mutual_fundDeleteArgs<ExtArgs>>): Prisma__mutual_fundClient<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mutual_fund.
     * @param {mutual_fundUpdateArgs} args - Arguments to update one Mutual_fund.
     * @example
     * // Update one Mutual_fund
     * const mutual_fund = await prisma.mutual_fund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mutual_fundUpdateArgs>(args: SelectSubset<T, mutual_fundUpdateArgs<ExtArgs>>): Prisma__mutual_fundClient<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mutual_funds.
     * @param {mutual_fundDeleteManyArgs} args - Arguments to filter Mutual_funds to delete.
     * @example
     * // Delete a few Mutual_funds
     * const { count } = await prisma.mutual_fund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mutual_fundDeleteManyArgs>(args?: SelectSubset<T, mutual_fundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mutual_funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mutual_fundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mutual_funds
     * const mutual_fund = await prisma.mutual_fund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mutual_fundUpdateManyArgs>(args: SelectSubset<T, mutual_fundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mutual_funds and returns the data updated in the database.
     * @param {mutual_fundUpdateManyAndReturnArgs} args - Arguments to update many Mutual_funds.
     * @example
     * // Update many Mutual_funds
     * const mutual_fund = await prisma.mutual_fund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mutual_funds and only return the `id`
     * const mutual_fundWithIdOnly = await prisma.mutual_fund.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mutual_fundUpdateManyAndReturnArgs>(args: SelectSubset<T, mutual_fundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mutual_fund.
     * @param {mutual_fundUpsertArgs} args - Arguments to update or create a Mutual_fund.
     * @example
     * // Update or create a Mutual_fund
     * const mutual_fund = await prisma.mutual_fund.upsert({
     *   create: {
     *     // ... data to create a Mutual_fund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mutual_fund we want to update
     *   }
     * })
     */
    upsert<T extends mutual_fundUpsertArgs>(args: SelectSubset<T, mutual_fundUpsertArgs<ExtArgs>>): Prisma__mutual_fundClient<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mutual_funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mutual_fundCountArgs} args - Arguments to filter Mutual_funds to count.
     * @example
     * // Count the number of Mutual_funds
     * const count = await prisma.mutual_fund.count({
     *   where: {
     *     // ... the filter for the Mutual_funds we want to count
     *   }
     * })
    **/
    count<T extends mutual_fundCountArgs>(
      args?: Subset<T, mutual_fundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mutual_fundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mutual_fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mutual_fundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mutual_fundAggregateArgs>(args: Subset<T, Mutual_fundAggregateArgs>): Prisma.PrismaPromise<GetMutual_fundAggregateType<T>>

    /**
     * Group by Mutual_fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mutual_fundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mutual_fundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mutual_fundGroupByArgs['orderBy'] }
        : { orderBy?: mutual_fundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mutual_fundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMutual_fundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mutual_fund model
   */
  readonly fields: mutual_fundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mutual_fund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mutual_fundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    units_lots<T extends mutual_fund$units_lotsArgs<ExtArgs> = {}>(args?: Subset<T, mutual_fund$units_lotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mutual_fund model
   */
  interface mutual_fundFieldRefs {
    readonly id: FieldRef<"mutual_fund", 'String'>
    readonly name: FieldRef<"mutual_fund", 'String'>
    readonly isin: FieldRef<"mutual_fund", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mutual_fund findUnique
   */
  export type mutual_fundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mutual_fundInclude<ExtArgs> | null
    /**
     * Filter, which mutual_fund to fetch.
     */
    where: mutual_fundWhereUniqueInput
  }

  /**
   * mutual_fund findUniqueOrThrow
   */
  export type mutual_fundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mutual_fundInclude<ExtArgs> | null
    /**
     * Filter, which mutual_fund to fetch.
     */
    where: mutual_fundWhereUniqueInput
  }

  /**
   * mutual_fund findFirst
   */
  export type mutual_fundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mutual_fundInclude<ExtArgs> | null
    /**
     * Filter, which mutual_fund to fetch.
     */
    where?: mutual_fundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mutual_funds to fetch.
     */
    orderBy?: mutual_fundOrderByWithRelationInput | mutual_fundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mutual_funds.
     */
    cursor?: mutual_fundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mutual_funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mutual_funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mutual_funds.
     */
    distinct?: Mutual_fundScalarFieldEnum | Mutual_fundScalarFieldEnum[]
  }

  /**
   * mutual_fund findFirstOrThrow
   */
  export type mutual_fundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mutual_fundInclude<ExtArgs> | null
    /**
     * Filter, which mutual_fund to fetch.
     */
    where?: mutual_fundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mutual_funds to fetch.
     */
    orderBy?: mutual_fundOrderByWithRelationInput | mutual_fundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mutual_funds.
     */
    cursor?: mutual_fundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mutual_funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mutual_funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mutual_funds.
     */
    distinct?: Mutual_fundScalarFieldEnum | Mutual_fundScalarFieldEnum[]
  }

  /**
   * mutual_fund findMany
   */
  export type mutual_fundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mutual_fundInclude<ExtArgs> | null
    /**
     * Filter, which mutual_funds to fetch.
     */
    where?: mutual_fundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mutual_funds to fetch.
     */
    orderBy?: mutual_fundOrderByWithRelationInput | mutual_fundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mutual_funds.
     */
    cursor?: mutual_fundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mutual_funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mutual_funds.
     */
    skip?: number
    distinct?: Mutual_fundScalarFieldEnum | Mutual_fundScalarFieldEnum[]
  }

  /**
   * mutual_fund create
   */
  export type mutual_fundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mutual_fundInclude<ExtArgs> | null
    /**
     * The data needed to create a mutual_fund.
     */
    data: XOR<mutual_fundCreateInput, mutual_fundUncheckedCreateInput>
  }

  /**
   * mutual_fund createMany
   */
  export type mutual_fundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mutual_funds.
     */
    data: mutual_fundCreateManyInput | mutual_fundCreateManyInput[]
  }

  /**
   * mutual_fund createManyAndReturn
   */
  export type mutual_fundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * The data used to create many mutual_funds.
     */
    data: mutual_fundCreateManyInput | mutual_fundCreateManyInput[]
  }

  /**
   * mutual_fund update
   */
  export type mutual_fundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mutual_fundInclude<ExtArgs> | null
    /**
     * The data needed to update a mutual_fund.
     */
    data: XOR<mutual_fundUpdateInput, mutual_fundUncheckedUpdateInput>
    /**
     * Choose, which mutual_fund to update.
     */
    where: mutual_fundWhereUniqueInput
  }

  /**
   * mutual_fund updateMany
   */
  export type mutual_fundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mutual_funds.
     */
    data: XOR<mutual_fundUpdateManyMutationInput, mutual_fundUncheckedUpdateManyInput>
    /**
     * Filter which mutual_funds to update
     */
    where?: mutual_fundWhereInput
    /**
     * Limit how many mutual_funds to update.
     */
    limit?: number
  }

  /**
   * mutual_fund updateManyAndReturn
   */
  export type mutual_fundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * The data used to update mutual_funds.
     */
    data: XOR<mutual_fundUpdateManyMutationInput, mutual_fundUncheckedUpdateManyInput>
    /**
     * Filter which mutual_funds to update
     */
    where?: mutual_fundWhereInput
    /**
     * Limit how many mutual_funds to update.
     */
    limit?: number
  }

  /**
   * mutual_fund upsert
   */
  export type mutual_fundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mutual_fundInclude<ExtArgs> | null
    /**
     * The filter to search for the mutual_fund to update in case it exists.
     */
    where: mutual_fundWhereUniqueInput
    /**
     * In case the mutual_fund found by the `where` argument doesn't exist, create a new mutual_fund with this data.
     */
    create: XOR<mutual_fundCreateInput, mutual_fundUncheckedCreateInput>
    /**
     * In case the mutual_fund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mutual_fundUpdateInput, mutual_fundUncheckedUpdateInput>
  }

  /**
   * mutual_fund delete
   */
  export type mutual_fundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mutual_fundInclude<ExtArgs> | null
    /**
     * Filter which mutual_fund to delete.
     */
    where: mutual_fundWhereUniqueInput
  }

  /**
   * mutual_fund deleteMany
   */
  export type mutual_fundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mutual_funds to delete
     */
    where?: mutual_fundWhereInput
    /**
     * Limit how many mutual_funds to delete.
     */
    limit?: number
  }

  /**
   * mutual_fund.units_lots
   */
  export type mutual_fund$units_lotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotInclude<ExtArgs> | null
    where?: units_lotWhereInput
    orderBy?: units_lotOrderByWithRelationInput | units_lotOrderByWithRelationInput[]
    cursor?: units_lotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Units_lotScalarFieldEnum | Units_lotScalarFieldEnum[]
  }

  /**
   * mutual_fund without action
   */
  export type mutual_fundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mutual_fund
     */
    select?: mutual_fundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mutual_fund
     */
    omit?: mutual_fundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mutual_fundInclude<ExtArgs> | null
  }


  /**
   * Model units_lot
   */

  export type AggregateUnits_lot = {
    _count: Units_lotCountAggregateOutputType | null
    _min: Units_lotMinAggregateOutputType | null
    _max: Units_lotMaxAggregateOutputType | null
  }

  export type Units_lotMinAggregateOutputType = {
    id: string | null
    mutual_fund_id: string | null
  }

  export type Units_lotMaxAggregateOutputType = {
    id: string | null
    mutual_fund_id: string | null
  }

  export type Units_lotCountAggregateOutputType = {
    id: number
    mutual_fund_id: number
    _all: number
  }


  export type Units_lotMinAggregateInputType = {
    id?: true
    mutual_fund_id?: true
  }

  export type Units_lotMaxAggregateInputType = {
    id?: true
    mutual_fund_id?: true
  }

  export type Units_lotCountAggregateInputType = {
    id?: true
    mutual_fund_id?: true
    _all?: true
  }

  export type Units_lotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which units_lot to aggregate.
     */
    where?: units_lotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units_lots to fetch.
     */
    orderBy?: units_lotOrderByWithRelationInput | units_lotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: units_lotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units_lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units_lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned units_lots
    **/
    _count?: true | Units_lotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Units_lotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Units_lotMaxAggregateInputType
  }

  export type GetUnits_lotAggregateType<T extends Units_lotAggregateArgs> = {
        [P in keyof T & keyof AggregateUnits_lot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnits_lot[P]>
      : GetScalarType<T[P], AggregateUnits_lot[P]>
  }




  export type units_lotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: units_lotWhereInput
    orderBy?: units_lotOrderByWithAggregationInput | units_lotOrderByWithAggregationInput[]
    by: Units_lotScalarFieldEnum[] | Units_lotScalarFieldEnum
    having?: units_lotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Units_lotCountAggregateInputType | true
    _min?: Units_lotMinAggregateInputType
    _max?: Units_lotMaxAggregateInputType
  }

  export type Units_lotGroupByOutputType = {
    id: string
    mutual_fund_id: string
    _count: Units_lotCountAggregateOutputType | null
    _min: Units_lotMinAggregateOutputType | null
    _max: Units_lotMaxAggregateOutputType | null
  }

  type GetUnits_lotGroupByPayload<T extends units_lotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Units_lotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Units_lotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Units_lotGroupByOutputType[P]>
            : GetScalarType<T[P], Units_lotGroupByOutputType[P]>
        }
      >
    >


  export type units_lotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mutual_fund_id?: boolean
    investment_transaction?: boolean | units_lot$investment_transactionArgs<ExtArgs>
    redemption_buckets?: boolean | units_lot$redemption_bucketsArgs<ExtArgs>
    mutual_fund?: boolean | mutual_fundDefaultArgs<ExtArgs>
    _count?: boolean | Units_lotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["units_lot"]>

  export type units_lotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mutual_fund_id?: boolean
    mutual_fund?: boolean | mutual_fundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["units_lot"]>

  export type units_lotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mutual_fund_id?: boolean
    mutual_fund?: boolean | mutual_fundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["units_lot"]>

  export type units_lotSelectScalar = {
    id?: boolean
    mutual_fund_id?: boolean
  }

  export type units_lotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mutual_fund_id", ExtArgs["result"]["units_lot"]>
  export type units_lotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment_transaction?: boolean | units_lot$investment_transactionArgs<ExtArgs>
    redemption_buckets?: boolean | units_lot$redemption_bucketsArgs<ExtArgs>
    mutual_fund?: boolean | mutual_fundDefaultArgs<ExtArgs>
    _count?: boolean | Units_lotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type units_lotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mutual_fund?: boolean | mutual_fundDefaultArgs<ExtArgs>
  }
  export type units_lotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mutual_fund?: boolean | mutual_fundDefaultArgs<ExtArgs>
  }

  export type $units_lotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "units_lot"
    objects: {
      investment_transaction: Prisma.$investment_transactionPayload<ExtArgs> | null
      redemption_buckets: Prisma.$redemption_bucketPayload<ExtArgs>[]
      mutual_fund: Prisma.$mutual_fundPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mutual_fund_id: string
    }, ExtArgs["result"]["units_lot"]>
    composites: {}
  }

  type units_lotGetPayload<S extends boolean | null | undefined | units_lotDefaultArgs> = $Result.GetResult<Prisma.$units_lotPayload, S>

  type units_lotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<units_lotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Units_lotCountAggregateInputType | true
    }

  export interface units_lotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['units_lot'], meta: { name: 'units_lot' } }
    /**
     * Find zero or one Units_lot that matches the filter.
     * @param {units_lotFindUniqueArgs} args - Arguments to find a Units_lot
     * @example
     * // Get one Units_lot
     * const units_lot = await prisma.units_lot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends units_lotFindUniqueArgs>(args: SelectSubset<T, units_lotFindUniqueArgs<ExtArgs>>): Prisma__units_lotClient<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Units_lot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {units_lotFindUniqueOrThrowArgs} args - Arguments to find a Units_lot
     * @example
     * // Get one Units_lot
     * const units_lot = await prisma.units_lot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends units_lotFindUniqueOrThrowArgs>(args: SelectSubset<T, units_lotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__units_lotClient<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Units_lot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {units_lotFindFirstArgs} args - Arguments to find a Units_lot
     * @example
     * // Get one Units_lot
     * const units_lot = await prisma.units_lot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends units_lotFindFirstArgs>(args?: SelectSubset<T, units_lotFindFirstArgs<ExtArgs>>): Prisma__units_lotClient<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Units_lot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {units_lotFindFirstOrThrowArgs} args - Arguments to find a Units_lot
     * @example
     * // Get one Units_lot
     * const units_lot = await prisma.units_lot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends units_lotFindFirstOrThrowArgs>(args?: SelectSubset<T, units_lotFindFirstOrThrowArgs<ExtArgs>>): Prisma__units_lotClient<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units_lots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {units_lotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units_lots
     * const units_lots = await prisma.units_lot.findMany()
     * 
     * // Get first 10 Units_lots
     * const units_lots = await prisma.units_lot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const units_lotWithIdOnly = await prisma.units_lot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends units_lotFindManyArgs>(args?: SelectSubset<T, units_lotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Units_lot.
     * @param {units_lotCreateArgs} args - Arguments to create a Units_lot.
     * @example
     * // Create one Units_lot
     * const Units_lot = await prisma.units_lot.create({
     *   data: {
     *     // ... data to create a Units_lot
     *   }
     * })
     * 
     */
    create<T extends units_lotCreateArgs>(args: SelectSubset<T, units_lotCreateArgs<ExtArgs>>): Prisma__units_lotClient<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units_lots.
     * @param {units_lotCreateManyArgs} args - Arguments to create many Units_lots.
     * @example
     * // Create many Units_lots
     * const units_lot = await prisma.units_lot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends units_lotCreateManyArgs>(args?: SelectSubset<T, units_lotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units_lots and returns the data saved in the database.
     * @param {units_lotCreateManyAndReturnArgs} args - Arguments to create many Units_lots.
     * @example
     * // Create many Units_lots
     * const units_lot = await prisma.units_lot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units_lots and only return the `id`
     * const units_lotWithIdOnly = await prisma.units_lot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends units_lotCreateManyAndReturnArgs>(args?: SelectSubset<T, units_lotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Units_lot.
     * @param {units_lotDeleteArgs} args - Arguments to delete one Units_lot.
     * @example
     * // Delete one Units_lot
     * const Units_lot = await prisma.units_lot.delete({
     *   where: {
     *     // ... filter to delete one Units_lot
     *   }
     * })
     * 
     */
    delete<T extends units_lotDeleteArgs>(args: SelectSubset<T, units_lotDeleteArgs<ExtArgs>>): Prisma__units_lotClient<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Units_lot.
     * @param {units_lotUpdateArgs} args - Arguments to update one Units_lot.
     * @example
     * // Update one Units_lot
     * const units_lot = await prisma.units_lot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends units_lotUpdateArgs>(args: SelectSubset<T, units_lotUpdateArgs<ExtArgs>>): Prisma__units_lotClient<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units_lots.
     * @param {units_lotDeleteManyArgs} args - Arguments to filter Units_lots to delete.
     * @example
     * // Delete a few Units_lots
     * const { count } = await prisma.units_lot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends units_lotDeleteManyArgs>(args?: SelectSubset<T, units_lotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units_lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {units_lotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units_lots
     * const units_lot = await prisma.units_lot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends units_lotUpdateManyArgs>(args: SelectSubset<T, units_lotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units_lots and returns the data updated in the database.
     * @param {units_lotUpdateManyAndReturnArgs} args - Arguments to update many Units_lots.
     * @example
     * // Update many Units_lots
     * const units_lot = await prisma.units_lot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units_lots and only return the `id`
     * const units_lotWithIdOnly = await prisma.units_lot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends units_lotUpdateManyAndReturnArgs>(args: SelectSubset<T, units_lotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Units_lot.
     * @param {units_lotUpsertArgs} args - Arguments to update or create a Units_lot.
     * @example
     * // Update or create a Units_lot
     * const units_lot = await prisma.units_lot.upsert({
     *   create: {
     *     // ... data to create a Units_lot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Units_lot we want to update
     *   }
     * })
     */
    upsert<T extends units_lotUpsertArgs>(args: SelectSubset<T, units_lotUpsertArgs<ExtArgs>>): Prisma__units_lotClient<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units_lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {units_lotCountArgs} args - Arguments to filter Units_lots to count.
     * @example
     * // Count the number of Units_lots
     * const count = await prisma.units_lot.count({
     *   where: {
     *     // ... the filter for the Units_lots we want to count
     *   }
     * })
    **/
    count<T extends units_lotCountArgs>(
      args?: Subset<T, units_lotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Units_lotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Units_lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Units_lotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Units_lotAggregateArgs>(args: Subset<T, Units_lotAggregateArgs>): Prisma.PrismaPromise<GetUnits_lotAggregateType<T>>

    /**
     * Group by Units_lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {units_lotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends units_lotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: units_lotGroupByArgs['orderBy'] }
        : { orderBy?: units_lotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, units_lotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnits_lotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the units_lot model
   */
  readonly fields: units_lotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for units_lot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__units_lotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    investment_transaction<T extends units_lot$investment_transactionArgs<ExtArgs> = {}>(args?: Subset<T, units_lot$investment_transactionArgs<ExtArgs>>): Prisma__investment_transactionClient<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    redemption_buckets<T extends units_lot$redemption_bucketsArgs<ExtArgs> = {}>(args?: Subset<T, units_lot$redemption_bucketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mutual_fund<T extends mutual_fundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mutual_fundDefaultArgs<ExtArgs>>): Prisma__mutual_fundClient<$Result.GetResult<Prisma.$mutual_fundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the units_lot model
   */
  interface units_lotFieldRefs {
    readonly id: FieldRef<"units_lot", 'String'>
    readonly mutual_fund_id: FieldRef<"units_lot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * units_lot findUnique
   */
  export type units_lotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotInclude<ExtArgs> | null
    /**
     * Filter, which units_lot to fetch.
     */
    where: units_lotWhereUniqueInput
  }

  /**
   * units_lot findUniqueOrThrow
   */
  export type units_lotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotInclude<ExtArgs> | null
    /**
     * Filter, which units_lot to fetch.
     */
    where: units_lotWhereUniqueInput
  }

  /**
   * units_lot findFirst
   */
  export type units_lotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotInclude<ExtArgs> | null
    /**
     * Filter, which units_lot to fetch.
     */
    where?: units_lotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units_lots to fetch.
     */
    orderBy?: units_lotOrderByWithRelationInput | units_lotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for units_lots.
     */
    cursor?: units_lotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units_lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units_lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units_lots.
     */
    distinct?: Units_lotScalarFieldEnum | Units_lotScalarFieldEnum[]
  }

  /**
   * units_lot findFirstOrThrow
   */
  export type units_lotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotInclude<ExtArgs> | null
    /**
     * Filter, which units_lot to fetch.
     */
    where?: units_lotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units_lots to fetch.
     */
    orderBy?: units_lotOrderByWithRelationInput | units_lotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for units_lots.
     */
    cursor?: units_lotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units_lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units_lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units_lots.
     */
    distinct?: Units_lotScalarFieldEnum | Units_lotScalarFieldEnum[]
  }

  /**
   * units_lot findMany
   */
  export type units_lotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotInclude<ExtArgs> | null
    /**
     * Filter, which units_lots to fetch.
     */
    where?: units_lotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units_lots to fetch.
     */
    orderBy?: units_lotOrderByWithRelationInput | units_lotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing units_lots.
     */
    cursor?: units_lotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units_lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units_lots.
     */
    skip?: number
    distinct?: Units_lotScalarFieldEnum | Units_lotScalarFieldEnum[]
  }

  /**
   * units_lot create
   */
  export type units_lotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotInclude<ExtArgs> | null
    /**
     * The data needed to create a units_lot.
     */
    data: XOR<units_lotCreateInput, units_lotUncheckedCreateInput>
  }

  /**
   * units_lot createMany
   */
  export type units_lotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many units_lots.
     */
    data: units_lotCreateManyInput | units_lotCreateManyInput[]
  }

  /**
   * units_lot createManyAndReturn
   */
  export type units_lotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * The data used to create many units_lots.
     */
    data: units_lotCreateManyInput | units_lotCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * units_lot update
   */
  export type units_lotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotInclude<ExtArgs> | null
    /**
     * The data needed to update a units_lot.
     */
    data: XOR<units_lotUpdateInput, units_lotUncheckedUpdateInput>
    /**
     * Choose, which units_lot to update.
     */
    where: units_lotWhereUniqueInput
  }

  /**
   * units_lot updateMany
   */
  export type units_lotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update units_lots.
     */
    data: XOR<units_lotUpdateManyMutationInput, units_lotUncheckedUpdateManyInput>
    /**
     * Filter which units_lots to update
     */
    where?: units_lotWhereInput
    /**
     * Limit how many units_lots to update.
     */
    limit?: number
  }

  /**
   * units_lot updateManyAndReturn
   */
  export type units_lotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * The data used to update units_lots.
     */
    data: XOR<units_lotUpdateManyMutationInput, units_lotUncheckedUpdateManyInput>
    /**
     * Filter which units_lots to update
     */
    where?: units_lotWhereInput
    /**
     * Limit how many units_lots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * units_lot upsert
   */
  export type units_lotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotInclude<ExtArgs> | null
    /**
     * The filter to search for the units_lot to update in case it exists.
     */
    where: units_lotWhereUniqueInput
    /**
     * In case the units_lot found by the `where` argument doesn't exist, create a new units_lot with this data.
     */
    create: XOR<units_lotCreateInput, units_lotUncheckedCreateInput>
    /**
     * In case the units_lot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<units_lotUpdateInput, units_lotUncheckedUpdateInput>
  }

  /**
   * units_lot delete
   */
  export type units_lotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotInclude<ExtArgs> | null
    /**
     * Filter which units_lot to delete.
     */
    where: units_lotWhereUniqueInput
  }

  /**
   * units_lot deleteMany
   */
  export type units_lotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which units_lots to delete
     */
    where?: units_lotWhereInput
    /**
     * Limit how many units_lots to delete.
     */
    limit?: number
  }

  /**
   * units_lot.investment_transaction
   */
  export type units_lot$investment_transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    where?: investment_transactionWhereInput
  }

  /**
   * units_lot.redemption_buckets
   */
  export type units_lot$redemption_bucketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
    where?: redemption_bucketWhereInput
    orderBy?: redemption_bucketOrderByWithRelationInput | redemption_bucketOrderByWithRelationInput[]
    cursor?: redemption_bucketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Redemption_bucketScalarFieldEnum | Redemption_bucketScalarFieldEnum[]
  }

  /**
   * units_lot without action
   */
  export type units_lotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units_lot
     */
    select?: units_lotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units_lot
     */
    omit?: units_lotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: units_lotInclude<ExtArgs> | null
  }


  /**
   * Model investment_transaction
   */

  export type AggregateInvestment_transaction = {
    _count: Investment_transactionCountAggregateOutputType | null
    _avg: Investment_transactionAvgAggregateOutputType | null
    _sum: Investment_transactionSumAggregateOutputType | null
    _min: Investment_transactionMinAggregateOutputType | null
    _max: Investment_transactionMaxAggregateOutputType | null
  }

  export type Investment_transactionAvgAggregateOutputType = {
    units_bought: number | null
    buy_nav: number | null
  }

  export type Investment_transactionSumAggregateOutputType = {
    units_bought: number | null
    buy_nav: number | null
  }

  export type Investment_transactionMinAggregateOutputType = {
    id: string | null
    from_account_id: string | null
    units_bought: number | null
    buy_nav: number | null
    allotment_date: Date | null
    units_lot_id: string | null
    transaction_id: string | null
  }

  export type Investment_transactionMaxAggregateOutputType = {
    id: string | null
    from_account_id: string | null
    units_bought: number | null
    buy_nav: number | null
    allotment_date: Date | null
    units_lot_id: string | null
    transaction_id: string | null
  }

  export type Investment_transactionCountAggregateOutputType = {
    id: number
    from_account_id: number
    units_bought: number
    buy_nav: number
    allotment_date: number
    units_lot_id: number
    transaction_id: number
    _all: number
  }


  export type Investment_transactionAvgAggregateInputType = {
    units_bought?: true
    buy_nav?: true
  }

  export type Investment_transactionSumAggregateInputType = {
    units_bought?: true
    buy_nav?: true
  }

  export type Investment_transactionMinAggregateInputType = {
    id?: true
    from_account_id?: true
    units_bought?: true
    buy_nav?: true
    allotment_date?: true
    units_lot_id?: true
    transaction_id?: true
  }

  export type Investment_transactionMaxAggregateInputType = {
    id?: true
    from_account_id?: true
    units_bought?: true
    buy_nav?: true
    allotment_date?: true
    units_lot_id?: true
    transaction_id?: true
  }

  export type Investment_transactionCountAggregateInputType = {
    id?: true
    from_account_id?: true
    units_bought?: true
    buy_nav?: true
    allotment_date?: true
    units_lot_id?: true
    transaction_id?: true
    _all?: true
  }

  export type Investment_transactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which investment_transaction to aggregate.
     */
    where?: investment_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investment_transactions to fetch.
     */
    orderBy?: investment_transactionOrderByWithRelationInput | investment_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: investment_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investment_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investment_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned investment_transactions
    **/
    _count?: true | Investment_transactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Investment_transactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Investment_transactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Investment_transactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Investment_transactionMaxAggregateInputType
  }

  export type GetInvestment_transactionAggregateType<T extends Investment_transactionAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment_transaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment_transaction[P]>
      : GetScalarType<T[P], AggregateInvestment_transaction[P]>
  }




  export type investment_transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: investment_transactionWhereInput
    orderBy?: investment_transactionOrderByWithAggregationInput | investment_transactionOrderByWithAggregationInput[]
    by: Investment_transactionScalarFieldEnum[] | Investment_transactionScalarFieldEnum
    having?: investment_transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Investment_transactionCountAggregateInputType | true
    _avg?: Investment_transactionAvgAggregateInputType
    _sum?: Investment_transactionSumAggregateInputType
    _min?: Investment_transactionMinAggregateInputType
    _max?: Investment_transactionMaxAggregateInputType
  }

  export type Investment_transactionGroupByOutputType = {
    id: string
    from_account_id: string
    units_bought: number
    buy_nav: number
    allotment_date: Date
    units_lot_id: string
    transaction_id: string
    _count: Investment_transactionCountAggregateOutputType | null
    _avg: Investment_transactionAvgAggregateOutputType | null
    _sum: Investment_transactionSumAggregateOutputType | null
    _min: Investment_transactionMinAggregateOutputType | null
    _max: Investment_transactionMaxAggregateOutputType | null
  }

  type GetInvestment_transactionGroupByPayload<T extends investment_transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Investment_transactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Investment_transactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Investment_transactionGroupByOutputType[P]>
            : GetScalarType<T[P], Investment_transactionGroupByOutputType[P]>
        }
      >
    >


  export type investment_transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_account_id?: boolean
    units_bought?: boolean
    buy_nav?: boolean
    allotment_date?: boolean
    units_lot_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment_transaction"]>

  export type investment_transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_account_id?: boolean
    units_bought?: boolean
    buy_nav?: boolean
    allotment_date?: boolean
    units_lot_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment_transaction"]>

  export type investment_transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_account_id?: boolean
    units_bought?: boolean
    buy_nav?: boolean
    allotment_date?: boolean
    units_lot_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment_transaction"]>

  export type investment_transactionSelectScalar = {
    id?: boolean
    from_account_id?: boolean
    units_bought?: boolean
    buy_nav?: boolean
    allotment_date?: boolean
    units_lot_id?: boolean
    transaction_id?: boolean
  }

  export type investment_transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "from_account_id" | "units_bought" | "buy_nav" | "allotment_date" | "units_lot_id" | "transaction_id", ExtArgs["result"]["investment_transaction"]>
  export type investment_transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }
  export type investment_transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }
  export type investment_transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }

  export type $investment_transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "investment_transaction"
    objects: {
      transaction: Prisma.$transactionPayload<ExtArgs>
      from_account: Prisma.$accountPayload<ExtArgs>
      units_lot: Prisma.$units_lotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      from_account_id: string
      units_bought: number
      buy_nav: number
      allotment_date: Date
      units_lot_id: string
      transaction_id: string
    }, ExtArgs["result"]["investment_transaction"]>
    composites: {}
  }

  type investment_transactionGetPayload<S extends boolean | null | undefined | investment_transactionDefaultArgs> = $Result.GetResult<Prisma.$investment_transactionPayload, S>

  type investment_transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<investment_transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Investment_transactionCountAggregateInputType | true
    }

  export interface investment_transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['investment_transaction'], meta: { name: 'investment_transaction' } }
    /**
     * Find zero or one Investment_transaction that matches the filter.
     * @param {investment_transactionFindUniqueArgs} args - Arguments to find a Investment_transaction
     * @example
     * // Get one Investment_transaction
     * const investment_transaction = await prisma.investment_transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends investment_transactionFindUniqueArgs>(args: SelectSubset<T, investment_transactionFindUniqueArgs<ExtArgs>>): Prisma__investment_transactionClient<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investment_transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {investment_transactionFindUniqueOrThrowArgs} args - Arguments to find a Investment_transaction
     * @example
     * // Get one Investment_transaction
     * const investment_transaction = await prisma.investment_transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends investment_transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, investment_transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__investment_transactionClient<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment_transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_transactionFindFirstArgs} args - Arguments to find a Investment_transaction
     * @example
     * // Get one Investment_transaction
     * const investment_transaction = await prisma.investment_transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends investment_transactionFindFirstArgs>(args?: SelectSubset<T, investment_transactionFindFirstArgs<ExtArgs>>): Prisma__investment_transactionClient<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment_transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_transactionFindFirstOrThrowArgs} args - Arguments to find a Investment_transaction
     * @example
     * // Get one Investment_transaction
     * const investment_transaction = await prisma.investment_transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends investment_transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, investment_transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__investment_transactionClient<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investment_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investment_transactions
     * const investment_transactions = await prisma.investment_transaction.findMany()
     * 
     * // Get first 10 Investment_transactions
     * const investment_transactions = await prisma.investment_transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investment_transactionWithIdOnly = await prisma.investment_transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends investment_transactionFindManyArgs>(args?: SelectSubset<T, investment_transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investment_transaction.
     * @param {investment_transactionCreateArgs} args - Arguments to create a Investment_transaction.
     * @example
     * // Create one Investment_transaction
     * const Investment_transaction = await prisma.investment_transaction.create({
     *   data: {
     *     // ... data to create a Investment_transaction
     *   }
     * })
     * 
     */
    create<T extends investment_transactionCreateArgs>(args: SelectSubset<T, investment_transactionCreateArgs<ExtArgs>>): Prisma__investment_transactionClient<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investment_transactions.
     * @param {investment_transactionCreateManyArgs} args - Arguments to create many Investment_transactions.
     * @example
     * // Create many Investment_transactions
     * const investment_transaction = await prisma.investment_transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends investment_transactionCreateManyArgs>(args?: SelectSubset<T, investment_transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investment_transactions and returns the data saved in the database.
     * @param {investment_transactionCreateManyAndReturnArgs} args - Arguments to create many Investment_transactions.
     * @example
     * // Create many Investment_transactions
     * const investment_transaction = await prisma.investment_transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investment_transactions and only return the `id`
     * const investment_transactionWithIdOnly = await prisma.investment_transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends investment_transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, investment_transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investment_transaction.
     * @param {investment_transactionDeleteArgs} args - Arguments to delete one Investment_transaction.
     * @example
     * // Delete one Investment_transaction
     * const Investment_transaction = await prisma.investment_transaction.delete({
     *   where: {
     *     // ... filter to delete one Investment_transaction
     *   }
     * })
     * 
     */
    delete<T extends investment_transactionDeleteArgs>(args: SelectSubset<T, investment_transactionDeleteArgs<ExtArgs>>): Prisma__investment_transactionClient<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investment_transaction.
     * @param {investment_transactionUpdateArgs} args - Arguments to update one Investment_transaction.
     * @example
     * // Update one Investment_transaction
     * const investment_transaction = await prisma.investment_transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends investment_transactionUpdateArgs>(args: SelectSubset<T, investment_transactionUpdateArgs<ExtArgs>>): Prisma__investment_transactionClient<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investment_transactions.
     * @param {investment_transactionDeleteManyArgs} args - Arguments to filter Investment_transactions to delete.
     * @example
     * // Delete a few Investment_transactions
     * const { count } = await prisma.investment_transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends investment_transactionDeleteManyArgs>(args?: SelectSubset<T, investment_transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investment_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investment_transactions
     * const investment_transaction = await prisma.investment_transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends investment_transactionUpdateManyArgs>(args: SelectSubset<T, investment_transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investment_transactions and returns the data updated in the database.
     * @param {investment_transactionUpdateManyAndReturnArgs} args - Arguments to update many Investment_transactions.
     * @example
     * // Update many Investment_transactions
     * const investment_transaction = await prisma.investment_transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investment_transactions and only return the `id`
     * const investment_transactionWithIdOnly = await prisma.investment_transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends investment_transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, investment_transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investment_transaction.
     * @param {investment_transactionUpsertArgs} args - Arguments to update or create a Investment_transaction.
     * @example
     * // Update or create a Investment_transaction
     * const investment_transaction = await prisma.investment_transaction.upsert({
     *   create: {
     *     // ... data to create a Investment_transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment_transaction we want to update
     *   }
     * })
     */
    upsert<T extends investment_transactionUpsertArgs>(args: SelectSubset<T, investment_transactionUpsertArgs<ExtArgs>>): Prisma__investment_transactionClient<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investment_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_transactionCountArgs} args - Arguments to filter Investment_transactions to count.
     * @example
     * // Count the number of Investment_transactions
     * const count = await prisma.investment_transaction.count({
     *   where: {
     *     // ... the filter for the Investment_transactions we want to count
     *   }
     * })
    **/
    count<T extends investment_transactionCountArgs>(
      args?: Subset<T, investment_transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Investment_transactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Investment_transactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Investment_transactionAggregateArgs>(args: Subset<T, Investment_transactionAggregateArgs>): Prisma.PrismaPromise<GetInvestment_transactionAggregateType<T>>

    /**
     * Group by Investment_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {investment_transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends investment_transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: investment_transactionGroupByArgs['orderBy'] }
        : { orderBy?: investment_transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, investment_transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestment_transactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the investment_transaction model
   */
  readonly fields: investment_transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for investment_transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__investment_transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends transactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transactionDefaultArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    from_account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    units_lot<T extends units_lotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, units_lotDefaultArgs<ExtArgs>>): Prisma__units_lotClient<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the investment_transaction model
   */
  interface investment_transactionFieldRefs {
    readonly id: FieldRef<"investment_transaction", 'String'>
    readonly from_account_id: FieldRef<"investment_transaction", 'String'>
    readonly units_bought: FieldRef<"investment_transaction", 'Float'>
    readonly buy_nav: FieldRef<"investment_transaction", 'Float'>
    readonly allotment_date: FieldRef<"investment_transaction", 'DateTime'>
    readonly units_lot_id: FieldRef<"investment_transaction", 'String'>
    readonly transaction_id: FieldRef<"investment_transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * investment_transaction findUnique
   */
  export type investment_transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    /**
     * Filter, which investment_transaction to fetch.
     */
    where: investment_transactionWhereUniqueInput
  }

  /**
   * investment_transaction findUniqueOrThrow
   */
  export type investment_transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    /**
     * Filter, which investment_transaction to fetch.
     */
    where: investment_transactionWhereUniqueInput
  }

  /**
   * investment_transaction findFirst
   */
  export type investment_transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    /**
     * Filter, which investment_transaction to fetch.
     */
    where?: investment_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investment_transactions to fetch.
     */
    orderBy?: investment_transactionOrderByWithRelationInput | investment_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for investment_transactions.
     */
    cursor?: investment_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investment_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investment_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of investment_transactions.
     */
    distinct?: Investment_transactionScalarFieldEnum | Investment_transactionScalarFieldEnum[]
  }

  /**
   * investment_transaction findFirstOrThrow
   */
  export type investment_transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    /**
     * Filter, which investment_transaction to fetch.
     */
    where?: investment_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investment_transactions to fetch.
     */
    orderBy?: investment_transactionOrderByWithRelationInput | investment_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for investment_transactions.
     */
    cursor?: investment_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investment_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investment_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of investment_transactions.
     */
    distinct?: Investment_transactionScalarFieldEnum | Investment_transactionScalarFieldEnum[]
  }

  /**
   * investment_transaction findMany
   */
  export type investment_transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    /**
     * Filter, which investment_transactions to fetch.
     */
    where?: investment_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of investment_transactions to fetch.
     */
    orderBy?: investment_transactionOrderByWithRelationInput | investment_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing investment_transactions.
     */
    cursor?: investment_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` investment_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` investment_transactions.
     */
    skip?: number
    distinct?: Investment_transactionScalarFieldEnum | Investment_transactionScalarFieldEnum[]
  }

  /**
   * investment_transaction create
   */
  export type investment_transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a investment_transaction.
     */
    data: XOR<investment_transactionCreateInput, investment_transactionUncheckedCreateInput>
  }

  /**
   * investment_transaction createMany
   */
  export type investment_transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many investment_transactions.
     */
    data: investment_transactionCreateManyInput | investment_transactionCreateManyInput[]
  }

  /**
   * investment_transaction createManyAndReturn
   */
  export type investment_transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * The data used to create many investment_transactions.
     */
    data: investment_transactionCreateManyInput | investment_transactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * investment_transaction update
   */
  export type investment_transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a investment_transaction.
     */
    data: XOR<investment_transactionUpdateInput, investment_transactionUncheckedUpdateInput>
    /**
     * Choose, which investment_transaction to update.
     */
    where: investment_transactionWhereUniqueInput
  }

  /**
   * investment_transaction updateMany
   */
  export type investment_transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update investment_transactions.
     */
    data: XOR<investment_transactionUpdateManyMutationInput, investment_transactionUncheckedUpdateManyInput>
    /**
     * Filter which investment_transactions to update
     */
    where?: investment_transactionWhereInput
    /**
     * Limit how many investment_transactions to update.
     */
    limit?: number
  }

  /**
   * investment_transaction updateManyAndReturn
   */
  export type investment_transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * The data used to update investment_transactions.
     */
    data: XOR<investment_transactionUpdateManyMutationInput, investment_transactionUncheckedUpdateManyInput>
    /**
     * Filter which investment_transactions to update
     */
    where?: investment_transactionWhereInput
    /**
     * Limit how many investment_transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * investment_transaction upsert
   */
  export type investment_transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the investment_transaction to update in case it exists.
     */
    where: investment_transactionWhereUniqueInput
    /**
     * In case the investment_transaction found by the `where` argument doesn't exist, create a new investment_transaction with this data.
     */
    create: XOR<investment_transactionCreateInput, investment_transactionUncheckedCreateInput>
    /**
     * In case the investment_transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<investment_transactionUpdateInput, investment_transactionUncheckedUpdateInput>
  }

  /**
   * investment_transaction delete
   */
  export type investment_transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    /**
     * Filter which investment_transaction to delete.
     */
    where: investment_transactionWhereUniqueInput
  }

  /**
   * investment_transaction deleteMany
   */
  export type investment_transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which investment_transactions to delete
     */
    where?: investment_transactionWhereInput
    /**
     * Limit how many investment_transactions to delete.
     */
    limit?: number
  }

  /**
   * investment_transaction without action
   */
  export type investment_transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
  }


  /**
   * Model redemption_transaction
   */

  export type AggregateRedemption_transaction = {
    _count: Redemption_transactionCountAggregateOutputType | null
    _avg: Redemption_transactionAvgAggregateOutputType | null
    _sum: Redemption_transactionSumAggregateOutputType | null
    _min: Redemption_transactionMinAggregateOutputType | null
    _max: Redemption_transactionMaxAggregateOutputType | null
  }

  export type Redemption_transactionAvgAggregateOutputType = {
    sell_nav: number | null
  }

  export type Redemption_transactionSumAggregateOutputType = {
    sell_nav: number | null
  }

  export type Redemption_transactionMinAggregateOutputType = {
    id: string | null
    to_account_id: string | null
    sell_nav: number | null
    redemption_date: Date | null
    transaction_id: string | null
  }

  export type Redemption_transactionMaxAggregateOutputType = {
    id: string | null
    to_account_id: string | null
    sell_nav: number | null
    redemption_date: Date | null
    transaction_id: string | null
  }

  export type Redemption_transactionCountAggregateOutputType = {
    id: number
    to_account_id: number
    sell_nav: number
    redemption_date: number
    transaction_id: number
    _all: number
  }


  export type Redemption_transactionAvgAggregateInputType = {
    sell_nav?: true
  }

  export type Redemption_transactionSumAggregateInputType = {
    sell_nav?: true
  }

  export type Redemption_transactionMinAggregateInputType = {
    id?: true
    to_account_id?: true
    sell_nav?: true
    redemption_date?: true
    transaction_id?: true
  }

  export type Redemption_transactionMaxAggregateInputType = {
    id?: true
    to_account_id?: true
    sell_nav?: true
    redemption_date?: true
    transaction_id?: true
  }

  export type Redemption_transactionCountAggregateInputType = {
    id?: true
    to_account_id?: true
    sell_nav?: true
    redemption_date?: true
    transaction_id?: true
    _all?: true
  }

  export type Redemption_transactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which redemption_transaction to aggregate.
     */
    where?: redemption_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemption_transactions to fetch.
     */
    orderBy?: redemption_transactionOrderByWithRelationInput | redemption_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: redemption_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemption_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemption_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned redemption_transactions
    **/
    _count?: true | Redemption_transactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Redemption_transactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Redemption_transactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Redemption_transactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Redemption_transactionMaxAggregateInputType
  }

  export type GetRedemption_transactionAggregateType<T extends Redemption_transactionAggregateArgs> = {
        [P in keyof T & keyof AggregateRedemption_transaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedemption_transaction[P]>
      : GetScalarType<T[P], AggregateRedemption_transaction[P]>
  }




  export type redemption_transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: redemption_transactionWhereInput
    orderBy?: redemption_transactionOrderByWithAggregationInput | redemption_transactionOrderByWithAggregationInput[]
    by: Redemption_transactionScalarFieldEnum[] | Redemption_transactionScalarFieldEnum
    having?: redemption_transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Redemption_transactionCountAggregateInputType | true
    _avg?: Redemption_transactionAvgAggregateInputType
    _sum?: Redemption_transactionSumAggregateInputType
    _min?: Redemption_transactionMinAggregateInputType
    _max?: Redemption_transactionMaxAggregateInputType
  }

  export type Redemption_transactionGroupByOutputType = {
    id: string
    to_account_id: string
    sell_nav: number
    redemption_date: Date
    transaction_id: string
    _count: Redemption_transactionCountAggregateOutputType | null
    _avg: Redemption_transactionAvgAggregateOutputType | null
    _sum: Redemption_transactionSumAggregateOutputType | null
    _min: Redemption_transactionMinAggregateOutputType | null
    _max: Redemption_transactionMaxAggregateOutputType | null
  }

  type GetRedemption_transactionGroupByPayload<T extends redemption_transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Redemption_transactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Redemption_transactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Redemption_transactionGroupByOutputType[P]>
            : GetScalarType<T[P], Redemption_transactionGroupByOutputType[P]>
        }
      >
    >


  export type redemption_transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to_account_id?: boolean
    sell_nav?: boolean
    redemption_date?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
    redemption_buckets?: boolean | redemption_transaction$redemption_bucketsArgs<ExtArgs>
    _count?: boolean | Redemption_transactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemption_transaction"]>

  export type redemption_transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to_account_id?: boolean
    sell_nav?: boolean
    redemption_date?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemption_transaction"]>

  export type redemption_transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to_account_id?: boolean
    sell_nav?: boolean
    redemption_date?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemption_transaction"]>

  export type redemption_transactionSelectScalar = {
    id?: boolean
    to_account_id?: boolean
    sell_nav?: boolean
    redemption_date?: boolean
    transaction_id?: boolean
  }

  export type redemption_transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "to_account_id" | "sell_nav" | "redemption_date" | "transaction_id", ExtArgs["result"]["redemption_transaction"]>
  export type redemption_transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
    redemption_buckets?: boolean | redemption_transaction$redemption_bucketsArgs<ExtArgs>
    _count?: boolean | Redemption_transactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type redemption_transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
  }
  export type redemption_transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
  }

  export type $redemption_transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "redemption_transaction"
    objects: {
      transaction: Prisma.$transactionPayload<ExtArgs>
      to_account: Prisma.$accountPayload<ExtArgs>
      redemption_buckets: Prisma.$redemption_bucketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      to_account_id: string
      sell_nav: number
      redemption_date: Date
      transaction_id: string
    }, ExtArgs["result"]["redemption_transaction"]>
    composites: {}
  }

  type redemption_transactionGetPayload<S extends boolean | null | undefined | redemption_transactionDefaultArgs> = $Result.GetResult<Prisma.$redemption_transactionPayload, S>

  type redemption_transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<redemption_transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Redemption_transactionCountAggregateInputType | true
    }

  export interface redemption_transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['redemption_transaction'], meta: { name: 'redemption_transaction' } }
    /**
     * Find zero or one Redemption_transaction that matches the filter.
     * @param {redemption_transactionFindUniqueArgs} args - Arguments to find a Redemption_transaction
     * @example
     * // Get one Redemption_transaction
     * const redemption_transaction = await prisma.redemption_transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends redemption_transactionFindUniqueArgs>(args: SelectSubset<T, redemption_transactionFindUniqueArgs<ExtArgs>>): Prisma__redemption_transactionClient<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Redemption_transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {redemption_transactionFindUniqueOrThrowArgs} args - Arguments to find a Redemption_transaction
     * @example
     * // Get one Redemption_transaction
     * const redemption_transaction = await prisma.redemption_transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends redemption_transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, redemption_transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__redemption_transactionClient<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Redemption_transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_transactionFindFirstArgs} args - Arguments to find a Redemption_transaction
     * @example
     * // Get one Redemption_transaction
     * const redemption_transaction = await prisma.redemption_transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends redemption_transactionFindFirstArgs>(args?: SelectSubset<T, redemption_transactionFindFirstArgs<ExtArgs>>): Prisma__redemption_transactionClient<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Redemption_transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_transactionFindFirstOrThrowArgs} args - Arguments to find a Redemption_transaction
     * @example
     * // Get one Redemption_transaction
     * const redemption_transaction = await prisma.redemption_transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends redemption_transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, redemption_transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__redemption_transactionClient<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Redemption_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Redemption_transactions
     * const redemption_transactions = await prisma.redemption_transaction.findMany()
     * 
     * // Get first 10 Redemption_transactions
     * const redemption_transactions = await prisma.redemption_transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const redemption_transactionWithIdOnly = await prisma.redemption_transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends redemption_transactionFindManyArgs>(args?: SelectSubset<T, redemption_transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Redemption_transaction.
     * @param {redemption_transactionCreateArgs} args - Arguments to create a Redemption_transaction.
     * @example
     * // Create one Redemption_transaction
     * const Redemption_transaction = await prisma.redemption_transaction.create({
     *   data: {
     *     // ... data to create a Redemption_transaction
     *   }
     * })
     * 
     */
    create<T extends redemption_transactionCreateArgs>(args: SelectSubset<T, redemption_transactionCreateArgs<ExtArgs>>): Prisma__redemption_transactionClient<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Redemption_transactions.
     * @param {redemption_transactionCreateManyArgs} args - Arguments to create many Redemption_transactions.
     * @example
     * // Create many Redemption_transactions
     * const redemption_transaction = await prisma.redemption_transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends redemption_transactionCreateManyArgs>(args?: SelectSubset<T, redemption_transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Redemption_transactions and returns the data saved in the database.
     * @param {redemption_transactionCreateManyAndReturnArgs} args - Arguments to create many Redemption_transactions.
     * @example
     * // Create many Redemption_transactions
     * const redemption_transaction = await prisma.redemption_transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Redemption_transactions and only return the `id`
     * const redemption_transactionWithIdOnly = await prisma.redemption_transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends redemption_transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, redemption_transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Redemption_transaction.
     * @param {redemption_transactionDeleteArgs} args - Arguments to delete one Redemption_transaction.
     * @example
     * // Delete one Redemption_transaction
     * const Redemption_transaction = await prisma.redemption_transaction.delete({
     *   where: {
     *     // ... filter to delete one Redemption_transaction
     *   }
     * })
     * 
     */
    delete<T extends redemption_transactionDeleteArgs>(args: SelectSubset<T, redemption_transactionDeleteArgs<ExtArgs>>): Prisma__redemption_transactionClient<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Redemption_transaction.
     * @param {redemption_transactionUpdateArgs} args - Arguments to update one Redemption_transaction.
     * @example
     * // Update one Redemption_transaction
     * const redemption_transaction = await prisma.redemption_transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends redemption_transactionUpdateArgs>(args: SelectSubset<T, redemption_transactionUpdateArgs<ExtArgs>>): Prisma__redemption_transactionClient<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Redemption_transactions.
     * @param {redemption_transactionDeleteManyArgs} args - Arguments to filter Redemption_transactions to delete.
     * @example
     * // Delete a few Redemption_transactions
     * const { count } = await prisma.redemption_transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends redemption_transactionDeleteManyArgs>(args?: SelectSubset<T, redemption_transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Redemption_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Redemption_transactions
     * const redemption_transaction = await prisma.redemption_transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends redemption_transactionUpdateManyArgs>(args: SelectSubset<T, redemption_transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Redemption_transactions and returns the data updated in the database.
     * @param {redemption_transactionUpdateManyAndReturnArgs} args - Arguments to update many Redemption_transactions.
     * @example
     * // Update many Redemption_transactions
     * const redemption_transaction = await prisma.redemption_transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Redemption_transactions and only return the `id`
     * const redemption_transactionWithIdOnly = await prisma.redemption_transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends redemption_transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, redemption_transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Redemption_transaction.
     * @param {redemption_transactionUpsertArgs} args - Arguments to update or create a Redemption_transaction.
     * @example
     * // Update or create a Redemption_transaction
     * const redemption_transaction = await prisma.redemption_transaction.upsert({
     *   create: {
     *     // ... data to create a Redemption_transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Redemption_transaction we want to update
     *   }
     * })
     */
    upsert<T extends redemption_transactionUpsertArgs>(args: SelectSubset<T, redemption_transactionUpsertArgs<ExtArgs>>): Prisma__redemption_transactionClient<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Redemption_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_transactionCountArgs} args - Arguments to filter Redemption_transactions to count.
     * @example
     * // Count the number of Redemption_transactions
     * const count = await prisma.redemption_transaction.count({
     *   where: {
     *     // ... the filter for the Redemption_transactions we want to count
     *   }
     * })
    **/
    count<T extends redemption_transactionCountArgs>(
      args?: Subset<T, redemption_transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Redemption_transactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Redemption_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Redemption_transactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Redemption_transactionAggregateArgs>(args: Subset<T, Redemption_transactionAggregateArgs>): Prisma.PrismaPromise<GetRedemption_transactionAggregateType<T>>

    /**
     * Group by Redemption_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends redemption_transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: redemption_transactionGroupByArgs['orderBy'] }
        : { orderBy?: redemption_transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, redemption_transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedemption_transactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the redemption_transaction model
   */
  readonly fields: redemption_transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for redemption_transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__redemption_transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends transactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transactionDefaultArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to_account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    redemption_buckets<T extends redemption_transaction$redemption_bucketsArgs<ExtArgs> = {}>(args?: Subset<T, redemption_transaction$redemption_bucketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the redemption_transaction model
   */
  interface redemption_transactionFieldRefs {
    readonly id: FieldRef<"redemption_transaction", 'String'>
    readonly to_account_id: FieldRef<"redemption_transaction", 'String'>
    readonly sell_nav: FieldRef<"redemption_transaction", 'Float'>
    readonly redemption_date: FieldRef<"redemption_transaction", 'DateTime'>
    readonly transaction_id: FieldRef<"redemption_transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * redemption_transaction findUnique
   */
  export type redemption_transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
    /**
     * Filter, which redemption_transaction to fetch.
     */
    where: redemption_transactionWhereUniqueInput
  }

  /**
   * redemption_transaction findUniqueOrThrow
   */
  export type redemption_transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
    /**
     * Filter, which redemption_transaction to fetch.
     */
    where: redemption_transactionWhereUniqueInput
  }

  /**
   * redemption_transaction findFirst
   */
  export type redemption_transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
    /**
     * Filter, which redemption_transaction to fetch.
     */
    where?: redemption_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemption_transactions to fetch.
     */
    orderBy?: redemption_transactionOrderByWithRelationInput | redemption_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for redemption_transactions.
     */
    cursor?: redemption_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemption_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemption_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of redemption_transactions.
     */
    distinct?: Redemption_transactionScalarFieldEnum | Redemption_transactionScalarFieldEnum[]
  }

  /**
   * redemption_transaction findFirstOrThrow
   */
  export type redemption_transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
    /**
     * Filter, which redemption_transaction to fetch.
     */
    where?: redemption_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemption_transactions to fetch.
     */
    orderBy?: redemption_transactionOrderByWithRelationInput | redemption_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for redemption_transactions.
     */
    cursor?: redemption_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemption_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemption_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of redemption_transactions.
     */
    distinct?: Redemption_transactionScalarFieldEnum | Redemption_transactionScalarFieldEnum[]
  }

  /**
   * redemption_transaction findMany
   */
  export type redemption_transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
    /**
     * Filter, which redemption_transactions to fetch.
     */
    where?: redemption_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemption_transactions to fetch.
     */
    orderBy?: redemption_transactionOrderByWithRelationInput | redemption_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing redemption_transactions.
     */
    cursor?: redemption_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemption_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemption_transactions.
     */
    skip?: number
    distinct?: Redemption_transactionScalarFieldEnum | Redemption_transactionScalarFieldEnum[]
  }

  /**
   * redemption_transaction create
   */
  export type redemption_transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a redemption_transaction.
     */
    data: XOR<redemption_transactionCreateInput, redemption_transactionUncheckedCreateInput>
  }

  /**
   * redemption_transaction createMany
   */
  export type redemption_transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many redemption_transactions.
     */
    data: redemption_transactionCreateManyInput | redemption_transactionCreateManyInput[]
  }

  /**
   * redemption_transaction createManyAndReturn
   */
  export type redemption_transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * The data used to create many redemption_transactions.
     */
    data: redemption_transactionCreateManyInput | redemption_transactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * redemption_transaction update
   */
  export type redemption_transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a redemption_transaction.
     */
    data: XOR<redemption_transactionUpdateInput, redemption_transactionUncheckedUpdateInput>
    /**
     * Choose, which redemption_transaction to update.
     */
    where: redemption_transactionWhereUniqueInput
  }

  /**
   * redemption_transaction updateMany
   */
  export type redemption_transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update redemption_transactions.
     */
    data: XOR<redemption_transactionUpdateManyMutationInput, redemption_transactionUncheckedUpdateManyInput>
    /**
     * Filter which redemption_transactions to update
     */
    where?: redemption_transactionWhereInput
    /**
     * Limit how many redemption_transactions to update.
     */
    limit?: number
  }

  /**
   * redemption_transaction updateManyAndReturn
   */
  export type redemption_transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * The data used to update redemption_transactions.
     */
    data: XOR<redemption_transactionUpdateManyMutationInput, redemption_transactionUncheckedUpdateManyInput>
    /**
     * Filter which redemption_transactions to update
     */
    where?: redemption_transactionWhereInput
    /**
     * Limit how many redemption_transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * redemption_transaction upsert
   */
  export type redemption_transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the redemption_transaction to update in case it exists.
     */
    where: redemption_transactionWhereUniqueInput
    /**
     * In case the redemption_transaction found by the `where` argument doesn't exist, create a new redemption_transaction with this data.
     */
    create: XOR<redemption_transactionCreateInput, redemption_transactionUncheckedCreateInput>
    /**
     * In case the redemption_transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<redemption_transactionUpdateInput, redemption_transactionUncheckedUpdateInput>
  }

  /**
   * redemption_transaction delete
   */
  export type redemption_transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
    /**
     * Filter which redemption_transaction to delete.
     */
    where: redemption_transactionWhereUniqueInput
  }

  /**
   * redemption_transaction deleteMany
   */
  export type redemption_transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which redemption_transactions to delete
     */
    where?: redemption_transactionWhereInput
    /**
     * Limit how many redemption_transactions to delete.
     */
    limit?: number
  }

  /**
   * redemption_transaction.redemption_buckets
   */
  export type redemption_transaction$redemption_bucketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
    where?: redemption_bucketWhereInput
    orderBy?: redemption_bucketOrderByWithRelationInput | redemption_bucketOrderByWithRelationInput[]
    cursor?: redemption_bucketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Redemption_bucketScalarFieldEnum | Redemption_bucketScalarFieldEnum[]
  }

  /**
   * redemption_transaction without action
   */
  export type redemption_transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
  }


  /**
   * Model redemption_bucket
   */

  export type AggregateRedemption_bucket = {
    _count: Redemption_bucketCountAggregateOutputType | null
    _avg: Redemption_bucketAvgAggregateOutputType | null
    _sum: Redemption_bucketSumAggregateOutputType | null
    _min: Redemption_bucketMinAggregateOutputType | null
    _max: Redemption_bucketMaxAggregateOutputType | null
  }

  export type Redemption_bucketAvgAggregateOutputType = {
    units_redeemed: number | null
  }

  export type Redemption_bucketSumAggregateOutputType = {
    units_redeemed: number | null
  }

  export type Redemption_bucketMinAggregateOutputType = {
    id: string | null
    redemption_transaction_id: string | null
    units_lot_id: string | null
    units_redeemed: number | null
  }

  export type Redemption_bucketMaxAggregateOutputType = {
    id: string | null
    redemption_transaction_id: string | null
    units_lot_id: string | null
    units_redeemed: number | null
  }

  export type Redemption_bucketCountAggregateOutputType = {
    id: number
    redemption_transaction_id: number
    units_lot_id: number
    units_redeemed: number
    _all: number
  }


  export type Redemption_bucketAvgAggregateInputType = {
    units_redeemed?: true
  }

  export type Redemption_bucketSumAggregateInputType = {
    units_redeemed?: true
  }

  export type Redemption_bucketMinAggregateInputType = {
    id?: true
    redemption_transaction_id?: true
    units_lot_id?: true
    units_redeemed?: true
  }

  export type Redemption_bucketMaxAggregateInputType = {
    id?: true
    redemption_transaction_id?: true
    units_lot_id?: true
    units_redeemed?: true
  }

  export type Redemption_bucketCountAggregateInputType = {
    id?: true
    redemption_transaction_id?: true
    units_lot_id?: true
    units_redeemed?: true
    _all?: true
  }

  export type Redemption_bucketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which redemption_bucket to aggregate.
     */
    where?: redemption_bucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemption_buckets to fetch.
     */
    orderBy?: redemption_bucketOrderByWithRelationInput | redemption_bucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: redemption_bucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemption_buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemption_buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned redemption_buckets
    **/
    _count?: true | Redemption_bucketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Redemption_bucketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Redemption_bucketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Redemption_bucketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Redemption_bucketMaxAggregateInputType
  }

  export type GetRedemption_bucketAggregateType<T extends Redemption_bucketAggregateArgs> = {
        [P in keyof T & keyof AggregateRedemption_bucket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedemption_bucket[P]>
      : GetScalarType<T[P], AggregateRedemption_bucket[P]>
  }




  export type redemption_bucketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: redemption_bucketWhereInput
    orderBy?: redemption_bucketOrderByWithAggregationInput | redemption_bucketOrderByWithAggregationInput[]
    by: Redemption_bucketScalarFieldEnum[] | Redemption_bucketScalarFieldEnum
    having?: redemption_bucketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Redemption_bucketCountAggregateInputType | true
    _avg?: Redemption_bucketAvgAggregateInputType
    _sum?: Redemption_bucketSumAggregateInputType
    _min?: Redemption_bucketMinAggregateInputType
    _max?: Redemption_bucketMaxAggregateInputType
  }

  export type Redemption_bucketGroupByOutputType = {
    id: string
    redemption_transaction_id: string
    units_lot_id: string
    units_redeemed: number
    _count: Redemption_bucketCountAggregateOutputType | null
    _avg: Redemption_bucketAvgAggregateOutputType | null
    _sum: Redemption_bucketSumAggregateOutputType | null
    _min: Redemption_bucketMinAggregateOutputType | null
    _max: Redemption_bucketMaxAggregateOutputType | null
  }

  type GetRedemption_bucketGroupByPayload<T extends redemption_bucketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Redemption_bucketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Redemption_bucketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Redemption_bucketGroupByOutputType[P]>
            : GetScalarType<T[P], Redemption_bucketGroupByOutputType[P]>
        }
      >
    >


  export type redemption_bucketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    redemption_transaction_id?: boolean
    units_lot_id?: boolean
    units_redeemed?: boolean
    redemption_transaction?: boolean | redemption_transactionDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemption_bucket"]>

  export type redemption_bucketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    redemption_transaction_id?: boolean
    units_lot_id?: boolean
    units_redeemed?: boolean
    redemption_transaction?: boolean | redemption_transactionDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemption_bucket"]>

  export type redemption_bucketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    redemption_transaction_id?: boolean
    units_lot_id?: boolean
    units_redeemed?: boolean
    redemption_transaction?: boolean | redemption_transactionDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["redemption_bucket"]>

  export type redemption_bucketSelectScalar = {
    id?: boolean
    redemption_transaction_id?: boolean
    units_lot_id?: boolean
    units_redeemed?: boolean
  }

  export type redemption_bucketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "redemption_transaction_id" | "units_lot_id" | "units_redeemed", ExtArgs["result"]["redemption_bucket"]>
  export type redemption_bucketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemption_transaction?: boolean | redemption_transactionDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }
  export type redemption_bucketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemption_transaction?: boolean | redemption_transactionDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }
  export type redemption_bucketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemption_transaction?: boolean | redemption_transactionDefaultArgs<ExtArgs>
    units_lot?: boolean | units_lotDefaultArgs<ExtArgs>
  }

  export type $redemption_bucketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "redemption_bucket"
    objects: {
      redemption_transaction: Prisma.$redemption_transactionPayload<ExtArgs>
      units_lot: Prisma.$units_lotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      redemption_transaction_id: string
      units_lot_id: string
      units_redeemed: number
    }, ExtArgs["result"]["redemption_bucket"]>
    composites: {}
  }

  type redemption_bucketGetPayload<S extends boolean | null | undefined | redemption_bucketDefaultArgs> = $Result.GetResult<Prisma.$redemption_bucketPayload, S>

  type redemption_bucketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<redemption_bucketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Redemption_bucketCountAggregateInputType | true
    }

  export interface redemption_bucketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['redemption_bucket'], meta: { name: 'redemption_bucket' } }
    /**
     * Find zero or one Redemption_bucket that matches the filter.
     * @param {redemption_bucketFindUniqueArgs} args - Arguments to find a Redemption_bucket
     * @example
     * // Get one Redemption_bucket
     * const redemption_bucket = await prisma.redemption_bucket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends redemption_bucketFindUniqueArgs>(args: SelectSubset<T, redemption_bucketFindUniqueArgs<ExtArgs>>): Prisma__redemption_bucketClient<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Redemption_bucket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {redemption_bucketFindUniqueOrThrowArgs} args - Arguments to find a Redemption_bucket
     * @example
     * // Get one Redemption_bucket
     * const redemption_bucket = await prisma.redemption_bucket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends redemption_bucketFindUniqueOrThrowArgs>(args: SelectSubset<T, redemption_bucketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__redemption_bucketClient<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Redemption_bucket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_bucketFindFirstArgs} args - Arguments to find a Redemption_bucket
     * @example
     * // Get one Redemption_bucket
     * const redemption_bucket = await prisma.redemption_bucket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends redemption_bucketFindFirstArgs>(args?: SelectSubset<T, redemption_bucketFindFirstArgs<ExtArgs>>): Prisma__redemption_bucketClient<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Redemption_bucket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_bucketFindFirstOrThrowArgs} args - Arguments to find a Redemption_bucket
     * @example
     * // Get one Redemption_bucket
     * const redemption_bucket = await prisma.redemption_bucket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends redemption_bucketFindFirstOrThrowArgs>(args?: SelectSubset<T, redemption_bucketFindFirstOrThrowArgs<ExtArgs>>): Prisma__redemption_bucketClient<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Redemption_buckets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_bucketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Redemption_buckets
     * const redemption_buckets = await prisma.redemption_bucket.findMany()
     * 
     * // Get first 10 Redemption_buckets
     * const redemption_buckets = await prisma.redemption_bucket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const redemption_bucketWithIdOnly = await prisma.redemption_bucket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends redemption_bucketFindManyArgs>(args?: SelectSubset<T, redemption_bucketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Redemption_bucket.
     * @param {redemption_bucketCreateArgs} args - Arguments to create a Redemption_bucket.
     * @example
     * // Create one Redemption_bucket
     * const Redemption_bucket = await prisma.redemption_bucket.create({
     *   data: {
     *     // ... data to create a Redemption_bucket
     *   }
     * })
     * 
     */
    create<T extends redemption_bucketCreateArgs>(args: SelectSubset<T, redemption_bucketCreateArgs<ExtArgs>>): Prisma__redemption_bucketClient<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Redemption_buckets.
     * @param {redemption_bucketCreateManyArgs} args - Arguments to create many Redemption_buckets.
     * @example
     * // Create many Redemption_buckets
     * const redemption_bucket = await prisma.redemption_bucket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends redemption_bucketCreateManyArgs>(args?: SelectSubset<T, redemption_bucketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Redemption_buckets and returns the data saved in the database.
     * @param {redemption_bucketCreateManyAndReturnArgs} args - Arguments to create many Redemption_buckets.
     * @example
     * // Create many Redemption_buckets
     * const redemption_bucket = await prisma.redemption_bucket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Redemption_buckets and only return the `id`
     * const redemption_bucketWithIdOnly = await prisma.redemption_bucket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends redemption_bucketCreateManyAndReturnArgs>(args?: SelectSubset<T, redemption_bucketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Redemption_bucket.
     * @param {redemption_bucketDeleteArgs} args - Arguments to delete one Redemption_bucket.
     * @example
     * // Delete one Redemption_bucket
     * const Redemption_bucket = await prisma.redemption_bucket.delete({
     *   where: {
     *     // ... filter to delete one Redemption_bucket
     *   }
     * })
     * 
     */
    delete<T extends redemption_bucketDeleteArgs>(args: SelectSubset<T, redemption_bucketDeleteArgs<ExtArgs>>): Prisma__redemption_bucketClient<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Redemption_bucket.
     * @param {redemption_bucketUpdateArgs} args - Arguments to update one Redemption_bucket.
     * @example
     * // Update one Redemption_bucket
     * const redemption_bucket = await prisma.redemption_bucket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends redemption_bucketUpdateArgs>(args: SelectSubset<T, redemption_bucketUpdateArgs<ExtArgs>>): Prisma__redemption_bucketClient<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Redemption_buckets.
     * @param {redemption_bucketDeleteManyArgs} args - Arguments to filter Redemption_buckets to delete.
     * @example
     * // Delete a few Redemption_buckets
     * const { count } = await prisma.redemption_bucket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends redemption_bucketDeleteManyArgs>(args?: SelectSubset<T, redemption_bucketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Redemption_buckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_bucketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Redemption_buckets
     * const redemption_bucket = await prisma.redemption_bucket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends redemption_bucketUpdateManyArgs>(args: SelectSubset<T, redemption_bucketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Redemption_buckets and returns the data updated in the database.
     * @param {redemption_bucketUpdateManyAndReturnArgs} args - Arguments to update many Redemption_buckets.
     * @example
     * // Update many Redemption_buckets
     * const redemption_bucket = await prisma.redemption_bucket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Redemption_buckets and only return the `id`
     * const redemption_bucketWithIdOnly = await prisma.redemption_bucket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends redemption_bucketUpdateManyAndReturnArgs>(args: SelectSubset<T, redemption_bucketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Redemption_bucket.
     * @param {redemption_bucketUpsertArgs} args - Arguments to update or create a Redemption_bucket.
     * @example
     * // Update or create a Redemption_bucket
     * const redemption_bucket = await prisma.redemption_bucket.upsert({
     *   create: {
     *     // ... data to create a Redemption_bucket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Redemption_bucket we want to update
     *   }
     * })
     */
    upsert<T extends redemption_bucketUpsertArgs>(args: SelectSubset<T, redemption_bucketUpsertArgs<ExtArgs>>): Prisma__redemption_bucketClient<$Result.GetResult<Prisma.$redemption_bucketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Redemption_buckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_bucketCountArgs} args - Arguments to filter Redemption_buckets to count.
     * @example
     * // Count the number of Redemption_buckets
     * const count = await prisma.redemption_bucket.count({
     *   where: {
     *     // ... the filter for the Redemption_buckets we want to count
     *   }
     * })
    **/
    count<T extends redemption_bucketCountArgs>(
      args?: Subset<T, redemption_bucketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Redemption_bucketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Redemption_bucket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Redemption_bucketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Redemption_bucketAggregateArgs>(args: Subset<T, Redemption_bucketAggregateArgs>): Prisma.PrismaPromise<GetRedemption_bucketAggregateType<T>>

    /**
     * Group by Redemption_bucket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemption_bucketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends redemption_bucketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: redemption_bucketGroupByArgs['orderBy'] }
        : { orderBy?: redemption_bucketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, redemption_bucketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedemption_bucketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the redemption_bucket model
   */
  readonly fields: redemption_bucketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for redemption_bucket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__redemption_bucketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    redemption_transaction<T extends redemption_transactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, redemption_transactionDefaultArgs<ExtArgs>>): Prisma__redemption_transactionClient<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    units_lot<T extends units_lotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, units_lotDefaultArgs<ExtArgs>>): Prisma__units_lotClient<$Result.GetResult<Prisma.$units_lotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the redemption_bucket model
   */
  interface redemption_bucketFieldRefs {
    readonly id: FieldRef<"redemption_bucket", 'String'>
    readonly redemption_transaction_id: FieldRef<"redemption_bucket", 'String'>
    readonly units_lot_id: FieldRef<"redemption_bucket", 'String'>
    readonly units_redeemed: FieldRef<"redemption_bucket", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * redemption_bucket findUnique
   */
  export type redemption_bucketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
    /**
     * Filter, which redemption_bucket to fetch.
     */
    where: redemption_bucketWhereUniqueInput
  }

  /**
   * redemption_bucket findUniqueOrThrow
   */
  export type redemption_bucketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
    /**
     * Filter, which redemption_bucket to fetch.
     */
    where: redemption_bucketWhereUniqueInput
  }

  /**
   * redemption_bucket findFirst
   */
  export type redemption_bucketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
    /**
     * Filter, which redemption_bucket to fetch.
     */
    where?: redemption_bucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemption_buckets to fetch.
     */
    orderBy?: redemption_bucketOrderByWithRelationInput | redemption_bucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for redemption_buckets.
     */
    cursor?: redemption_bucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemption_buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemption_buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of redemption_buckets.
     */
    distinct?: Redemption_bucketScalarFieldEnum | Redemption_bucketScalarFieldEnum[]
  }

  /**
   * redemption_bucket findFirstOrThrow
   */
  export type redemption_bucketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
    /**
     * Filter, which redemption_bucket to fetch.
     */
    where?: redemption_bucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemption_buckets to fetch.
     */
    orderBy?: redemption_bucketOrderByWithRelationInput | redemption_bucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for redemption_buckets.
     */
    cursor?: redemption_bucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemption_buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemption_buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of redemption_buckets.
     */
    distinct?: Redemption_bucketScalarFieldEnum | Redemption_bucketScalarFieldEnum[]
  }

  /**
   * redemption_bucket findMany
   */
  export type redemption_bucketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
    /**
     * Filter, which redemption_buckets to fetch.
     */
    where?: redemption_bucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemption_buckets to fetch.
     */
    orderBy?: redemption_bucketOrderByWithRelationInput | redemption_bucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing redemption_buckets.
     */
    cursor?: redemption_bucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemption_buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemption_buckets.
     */
    skip?: number
    distinct?: Redemption_bucketScalarFieldEnum | Redemption_bucketScalarFieldEnum[]
  }

  /**
   * redemption_bucket create
   */
  export type redemption_bucketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
    /**
     * The data needed to create a redemption_bucket.
     */
    data: XOR<redemption_bucketCreateInput, redemption_bucketUncheckedCreateInput>
  }

  /**
   * redemption_bucket createMany
   */
  export type redemption_bucketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many redemption_buckets.
     */
    data: redemption_bucketCreateManyInput | redemption_bucketCreateManyInput[]
  }

  /**
   * redemption_bucket createManyAndReturn
   */
  export type redemption_bucketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * The data used to create many redemption_buckets.
     */
    data: redemption_bucketCreateManyInput | redemption_bucketCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * redemption_bucket update
   */
  export type redemption_bucketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
    /**
     * The data needed to update a redemption_bucket.
     */
    data: XOR<redemption_bucketUpdateInput, redemption_bucketUncheckedUpdateInput>
    /**
     * Choose, which redemption_bucket to update.
     */
    where: redemption_bucketWhereUniqueInput
  }

  /**
   * redemption_bucket updateMany
   */
  export type redemption_bucketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update redemption_buckets.
     */
    data: XOR<redemption_bucketUpdateManyMutationInput, redemption_bucketUncheckedUpdateManyInput>
    /**
     * Filter which redemption_buckets to update
     */
    where?: redemption_bucketWhereInput
    /**
     * Limit how many redemption_buckets to update.
     */
    limit?: number
  }

  /**
   * redemption_bucket updateManyAndReturn
   */
  export type redemption_bucketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * The data used to update redemption_buckets.
     */
    data: XOR<redemption_bucketUpdateManyMutationInput, redemption_bucketUncheckedUpdateManyInput>
    /**
     * Filter which redemption_buckets to update
     */
    where?: redemption_bucketWhereInput
    /**
     * Limit how many redemption_buckets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * redemption_bucket upsert
   */
  export type redemption_bucketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
    /**
     * The filter to search for the redemption_bucket to update in case it exists.
     */
    where: redemption_bucketWhereUniqueInput
    /**
     * In case the redemption_bucket found by the `where` argument doesn't exist, create a new redemption_bucket with this data.
     */
    create: XOR<redemption_bucketCreateInput, redemption_bucketUncheckedCreateInput>
    /**
     * In case the redemption_bucket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<redemption_bucketUpdateInput, redemption_bucketUncheckedUpdateInput>
  }

  /**
   * redemption_bucket delete
   */
  export type redemption_bucketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
    /**
     * Filter which redemption_bucket to delete.
     */
    where: redemption_bucketWhereUniqueInput
  }

  /**
   * redemption_bucket deleteMany
   */
  export type redemption_bucketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which redemption_buckets to delete
     */
    where?: redemption_bucketWhereInput
    /**
     * Limit how many redemption_buckets to delete.
     */
    limit?: number
  }

  /**
   * redemption_bucket without action
   */
  export type redemption_bucketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_bucket
     */
    select?: redemption_bucketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_bucket
     */
    omit?: redemption_bucketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_bucketInclude<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    date: Date | null
    time: Date | null
    amount: number | null
    type: $Enums.transaction_type | null
    note: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    date: Date | null
    time: Date | null
    amount: number | null
    type: $Enums.transaction_type | null
    note: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    created_at: number
    date: number
    time: number
    amount: number
    type: number
    note: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    created_at?: true
    date?: true
    time?: true
    amount?: true
    type?: true
    note?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    created_at?: true
    date?: true
    time?: true
    amount?: true
    type?: true
    note?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    created_at?: true
    date?: true
    time?: true
    amount?: true
    type?: true
    note?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    created_at: Date
    date: Date
    time: Date | null
    amount: number
    type: $Enums.transaction_type
    note: string | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    date?: boolean
    time?: boolean
    amount?: boolean
    type?: boolean
    note?: boolean
    transfer_transaction?: boolean | transaction$transfer_transactionArgs<ExtArgs>
    expense_transaction?: boolean | transaction$expense_transactionArgs<ExtArgs>
    income_transaction?: boolean | transaction$income_transactionArgs<ExtArgs>
    investment_transaction?: boolean | transaction$investment_transactionArgs<ExtArgs>
    redemption_transaction?: boolean | transaction$redemption_transactionArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    date?: boolean
    time?: boolean
    amount?: boolean
    type?: boolean
    note?: boolean
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    date?: boolean
    time?: boolean
    amount?: boolean
    type?: boolean
    note?: boolean
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
    id?: boolean
    created_at?: boolean
    date?: boolean
    time?: boolean
    amount?: boolean
    type?: boolean
    note?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "date" | "time" | "amount" | "type" | "note", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transfer_transaction?: boolean | transaction$transfer_transactionArgs<ExtArgs>
    expense_transaction?: boolean | transaction$expense_transactionArgs<ExtArgs>
    income_transaction?: boolean | transaction$income_transactionArgs<ExtArgs>
    investment_transaction?: boolean | transaction$investment_transactionArgs<ExtArgs>
    redemption_transaction?: boolean | transaction$redemption_transactionArgs<ExtArgs>
  }
  export type transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      transfer_transaction: Prisma.$transfer_transactionPayload<ExtArgs> | null
      expense_transaction: Prisma.$expense_transactionPayload<ExtArgs> | null
      income_transaction: Prisma.$income_transactionPayload<ExtArgs> | null
      investment_transaction: Prisma.$investment_transactionPayload<ExtArgs> | null
      redemption_transaction: Prisma.$redemption_transactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      date: Date
      time: Date | null
      amount: number
      type: $Enums.transaction_type
      note: string | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transfer_transaction<T extends transaction$transfer_transactionArgs<ExtArgs> = {}>(args?: Subset<T, transaction$transfer_transactionArgs<ExtArgs>>): Prisma__transfer_transactionClient<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    expense_transaction<T extends transaction$expense_transactionArgs<ExtArgs> = {}>(args?: Subset<T, transaction$expense_transactionArgs<ExtArgs>>): Prisma__expense_transactionClient<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    income_transaction<T extends transaction$income_transactionArgs<ExtArgs> = {}>(args?: Subset<T, transaction$income_transactionArgs<ExtArgs>>): Prisma__income_transactionClient<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    investment_transaction<T extends transaction$investment_transactionArgs<ExtArgs> = {}>(args?: Subset<T, transaction$investment_transactionArgs<ExtArgs>>): Prisma__investment_transactionClient<$Result.GetResult<Prisma.$investment_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    redemption_transaction<T extends transaction$redemption_transactionArgs<ExtArgs> = {}>(args?: Subset<T, transaction$redemption_transactionArgs<ExtArgs>>): Prisma__redemption_transactionClient<$Result.GetResult<Prisma.$redemption_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'String'>
    readonly created_at: FieldRef<"transaction", 'DateTime'>
    readonly date: FieldRef<"transaction", 'DateTime'>
    readonly time: FieldRef<"transaction", 'DateTime'>
    readonly amount: FieldRef<"transaction", 'Float'>
    readonly type: FieldRef<"transaction", 'transaction_type'>
    readonly note: FieldRef<"transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
  }

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction.transfer_transaction
   */
  export type transaction$transfer_transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    where?: transfer_transactionWhereInput
  }

  /**
   * transaction.expense_transaction
   */
  export type transaction$expense_transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    where?: expense_transactionWhereInput
  }

  /**
   * transaction.income_transaction
   */
  export type transaction$income_transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    where?: income_transactionWhereInput
  }

  /**
   * transaction.investment_transaction
   */
  export type transaction$investment_transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the investment_transaction
     */
    select?: investment_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the investment_transaction
     */
    omit?: investment_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: investment_transactionInclude<ExtArgs> | null
    where?: investment_transactionWhereInput
  }

  /**
   * transaction.redemption_transaction
   */
  export type transaction$redemption_transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the redemption_transaction
     */
    select?: redemption_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the redemption_transaction
     */
    omit?: redemption_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: redemption_transactionInclude<ExtArgs> | null
    where?: redemption_transactionWhereInput
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model transfer_transaction
   */

  export type AggregateTransfer_transaction = {
    _count: Transfer_transactionCountAggregateOutputType | null
    _min: Transfer_transactionMinAggregateOutputType | null
    _max: Transfer_transactionMaxAggregateOutputType | null
  }

  export type Transfer_transactionMinAggregateOutputType = {
    id: string | null
    from_account_id: string | null
    to_account_id: string | null
    transaction_id: string | null
  }

  export type Transfer_transactionMaxAggregateOutputType = {
    id: string | null
    from_account_id: string | null
    to_account_id: string | null
    transaction_id: string | null
  }

  export type Transfer_transactionCountAggregateOutputType = {
    id: number
    from_account_id: number
    to_account_id: number
    transaction_id: number
    _all: number
  }


  export type Transfer_transactionMinAggregateInputType = {
    id?: true
    from_account_id?: true
    to_account_id?: true
    transaction_id?: true
  }

  export type Transfer_transactionMaxAggregateInputType = {
    id?: true
    from_account_id?: true
    to_account_id?: true
    transaction_id?: true
  }

  export type Transfer_transactionCountAggregateInputType = {
    id?: true
    from_account_id?: true
    to_account_id?: true
    transaction_id?: true
    _all?: true
  }

  export type Transfer_transactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transfer_transaction to aggregate.
     */
    where?: transfer_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfer_transactions to fetch.
     */
    orderBy?: transfer_transactionOrderByWithRelationInput | transfer_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transfer_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfer_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfer_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transfer_transactions
    **/
    _count?: true | Transfer_transactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transfer_transactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transfer_transactionMaxAggregateInputType
  }

  export type GetTransfer_transactionAggregateType<T extends Transfer_transactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransfer_transaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransfer_transaction[P]>
      : GetScalarType<T[P], AggregateTransfer_transaction[P]>
  }




  export type transfer_transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transfer_transactionWhereInput
    orderBy?: transfer_transactionOrderByWithAggregationInput | transfer_transactionOrderByWithAggregationInput[]
    by: Transfer_transactionScalarFieldEnum[] | Transfer_transactionScalarFieldEnum
    having?: transfer_transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transfer_transactionCountAggregateInputType | true
    _min?: Transfer_transactionMinAggregateInputType
    _max?: Transfer_transactionMaxAggregateInputType
  }

  export type Transfer_transactionGroupByOutputType = {
    id: string
    from_account_id: string
    to_account_id: string
    transaction_id: string
    _count: Transfer_transactionCountAggregateOutputType | null
    _min: Transfer_transactionMinAggregateOutputType | null
    _max: Transfer_transactionMaxAggregateOutputType | null
  }

  type GetTransfer_transactionGroupByPayload<T extends transfer_transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transfer_transactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transfer_transactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transfer_transactionGroupByOutputType[P]>
            : GetScalarType<T[P], Transfer_transactionGroupByOutputType[P]>
        }
      >
    >


  export type transfer_transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_account_id?: boolean
    to_account_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transfer_transaction"]>

  export type transfer_transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_account_id?: boolean
    to_account_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transfer_transaction"]>

  export type transfer_transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_account_id?: boolean
    to_account_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transfer_transaction"]>

  export type transfer_transactionSelectScalar = {
    id?: boolean
    from_account_id?: boolean
    to_account_id?: boolean
    transaction_id?: boolean
  }

  export type transfer_transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "from_account_id" | "to_account_id" | "transaction_id", ExtArgs["result"]["transfer_transaction"]>
  export type transfer_transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
  }
  export type transfer_transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
  }
  export type transfer_transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    from_account?: boolean | accountDefaultArgs<ExtArgs>
    to_account?: boolean | accountDefaultArgs<ExtArgs>
  }

  export type $transfer_transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transfer_transaction"
    objects: {
      transaction: Prisma.$transactionPayload<ExtArgs>
      from_account: Prisma.$accountPayload<ExtArgs>
      to_account: Prisma.$accountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      from_account_id: string
      to_account_id: string
      transaction_id: string
    }, ExtArgs["result"]["transfer_transaction"]>
    composites: {}
  }

  type transfer_transactionGetPayload<S extends boolean | null | undefined | transfer_transactionDefaultArgs> = $Result.GetResult<Prisma.$transfer_transactionPayload, S>

  type transfer_transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transfer_transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Transfer_transactionCountAggregateInputType | true
    }

  export interface transfer_transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transfer_transaction'], meta: { name: 'transfer_transaction' } }
    /**
     * Find zero or one Transfer_transaction that matches the filter.
     * @param {transfer_transactionFindUniqueArgs} args - Arguments to find a Transfer_transaction
     * @example
     * // Get one Transfer_transaction
     * const transfer_transaction = await prisma.transfer_transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transfer_transactionFindUniqueArgs>(args: SelectSubset<T, transfer_transactionFindUniqueArgs<ExtArgs>>): Prisma__transfer_transactionClient<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transfer_transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transfer_transactionFindUniqueOrThrowArgs} args - Arguments to find a Transfer_transaction
     * @example
     * // Get one Transfer_transaction
     * const transfer_transaction = await prisma.transfer_transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transfer_transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transfer_transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transfer_transactionClient<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transfer_transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfer_transactionFindFirstArgs} args - Arguments to find a Transfer_transaction
     * @example
     * // Get one Transfer_transaction
     * const transfer_transaction = await prisma.transfer_transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transfer_transactionFindFirstArgs>(args?: SelectSubset<T, transfer_transactionFindFirstArgs<ExtArgs>>): Prisma__transfer_transactionClient<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transfer_transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfer_transactionFindFirstOrThrowArgs} args - Arguments to find a Transfer_transaction
     * @example
     * // Get one Transfer_transaction
     * const transfer_transaction = await prisma.transfer_transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transfer_transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transfer_transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transfer_transactionClient<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transfer_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfer_transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transfer_transactions
     * const transfer_transactions = await prisma.transfer_transaction.findMany()
     * 
     * // Get first 10 Transfer_transactions
     * const transfer_transactions = await prisma.transfer_transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transfer_transactionWithIdOnly = await prisma.transfer_transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transfer_transactionFindManyArgs>(args?: SelectSubset<T, transfer_transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transfer_transaction.
     * @param {transfer_transactionCreateArgs} args - Arguments to create a Transfer_transaction.
     * @example
     * // Create one Transfer_transaction
     * const Transfer_transaction = await prisma.transfer_transaction.create({
     *   data: {
     *     // ... data to create a Transfer_transaction
     *   }
     * })
     * 
     */
    create<T extends transfer_transactionCreateArgs>(args: SelectSubset<T, transfer_transactionCreateArgs<ExtArgs>>): Prisma__transfer_transactionClient<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transfer_transactions.
     * @param {transfer_transactionCreateManyArgs} args - Arguments to create many Transfer_transactions.
     * @example
     * // Create many Transfer_transactions
     * const transfer_transaction = await prisma.transfer_transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transfer_transactionCreateManyArgs>(args?: SelectSubset<T, transfer_transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transfer_transactions and returns the data saved in the database.
     * @param {transfer_transactionCreateManyAndReturnArgs} args - Arguments to create many Transfer_transactions.
     * @example
     * // Create many Transfer_transactions
     * const transfer_transaction = await prisma.transfer_transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transfer_transactions and only return the `id`
     * const transfer_transactionWithIdOnly = await prisma.transfer_transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transfer_transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transfer_transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transfer_transaction.
     * @param {transfer_transactionDeleteArgs} args - Arguments to delete one Transfer_transaction.
     * @example
     * // Delete one Transfer_transaction
     * const Transfer_transaction = await prisma.transfer_transaction.delete({
     *   where: {
     *     // ... filter to delete one Transfer_transaction
     *   }
     * })
     * 
     */
    delete<T extends transfer_transactionDeleteArgs>(args: SelectSubset<T, transfer_transactionDeleteArgs<ExtArgs>>): Prisma__transfer_transactionClient<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transfer_transaction.
     * @param {transfer_transactionUpdateArgs} args - Arguments to update one Transfer_transaction.
     * @example
     * // Update one Transfer_transaction
     * const transfer_transaction = await prisma.transfer_transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transfer_transactionUpdateArgs>(args: SelectSubset<T, transfer_transactionUpdateArgs<ExtArgs>>): Prisma__transfer_transactionClient<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transfer_transactions.
     * @param {transfer_transactionDeleteManyArgs} args - Arguments to filter Transfer_transactions to delete.
     * @example
     * // Delete a few Transfer_transactions
     * const { count } = await prisma.transfer_transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transfer_transactionDeleteManyArgs>(args?: SelectSubset<T, transfer_transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transfer_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfer_transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transfer_transactions
     * const transfer_transaction = await prisma.transfer_transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transfer_transactionUpdateManyArgs>(args: SelectSubset<T, transfer_transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transfer_transactions and returns the data updated in the database.
     * @param {transfer_transactionUpdateManyAndReturnArgs} args - Arguments to update many Transfer_transactions.
     * @example
     * // Update many Transfer_transactions
     * const transfer_transaction = await prisma.transfer_transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transfer_transactions and only return the `id`
     * const transfer_transactionWithIdOnly = await prisma.transfer_transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transfer_transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transfer_transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transfer_transaction.
     * @param {transfer_transactionUpsertArgs} args - Arguments to update or create a Transfer_transaction.
     * @example
     * // Update or create a Transfer_transaction
     * const transfer_transaction = await prisma.transfer_transaction.upsert({
     *   create: {
     *     // ... data to create a Transfer_transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transfer_transaction we want to update
     *   }
     * })
     */
    upsert<T extends transfer_transactionUpsertArgs>(args: SelectSubset<T, transfer_transactionUpsertArgs<ExtArgs>>): Prisma__transfer_transactionClient<$Result.GetResult<Prisma.$transfer_transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transfer_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfer_transactionCountArgs} args - Arguments to filter Transfer_transactions to count.
     * @example
     * // Count the number of Transfer_transactions
     * const count = await prisma.transfer_transaction.count({
     *   where: {
     *     // ... the filter for the Transfer_transactions we want to count
     *   }
     * })
    **/
    count<T extends transfer_transactionCountArgs>(
      args?: Subset<T, transfer_transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transfer_transactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transfer_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transfer_transactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Transfer_transactionAggregateArgs>(args: Subset<T, Transfer_transactionAggregateArgs>): Prisma.PrismaPromise<GetTransfer_transactionAggregateType<T>>

    /**
     * Group by Transfer_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfer_transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transfer_transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transfer_transactionGroupByArgs['orderBy'] }
        : { orderBy?: transfer_transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transfer_transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransfer_transactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transfer_transaction model
   */
  readonly fields: transfer_transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transfer_transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transfer_transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends transactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transactionDefaultArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    from_account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to_account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transfer_transaction model
   */
  interface transfer_transactionFieldRefs {
    readonly id: FieldRef<"transfer_transaction", 'String'>
    readonly from_account_id: FieldRef<"transfer_transaction", 'String'>
    readonly to_account_id: FieldRef<"transfer_transaction", 'String'>
    readonly transaction_id: FieldRef<"transfer_transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transfer_transaction findUnique
   */
  export type transfer_transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    /**
     * Filter, which transfer_transaction to fetch.
     */
    where: transfer_transactionWhereUniqueInput
  }

  /**
   * transfer_transaction findUniqueOrThrow
   */
  export type transfer_transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    /**
     * Filter, which transfer_transaction to fetch.
     */
    where: transfer_transactionWhereUniqueInput
  }

  /**
   * transfer_transaction findFirst
   */
  export type transfer_transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    /**
     * Filter, which transfer_transaction to fetch.
     */
    where?: transfer_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfer_transactions to fetch.
     */
    orderBy?: transfer_transactionOrderByWithRelationInput | transfer_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transfer_transactions.
     */
    cursor?: transfer_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfer_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfer_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transfer_transactions.
     */
    distinct?: Transfer_transactionScalarFieldEnum | Transfer_transactionScalarFieldEnum[]
  }

  /**
   * transfer_transaction findFirstOrThrow
   */
  export type transfer_transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    /**
     * Filter, which transfer_transaction to fetch.
     */
    where?: transfer_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfer_transactions to fetch.
     */
    orderBy?: transfer_transactionOrderByWithRelationInput | transfer_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transfer_transactions.
     */
    cursor?: transfer_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfer_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfer_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transfer_transactions.
     */
    distinct?: Transfer_transactionScalarFieldEnum | Transfer_transactionScalarFieldEnum[]
  }

  /**
   * transfer_transaction findMany
   */
  export type transfer_transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    /**
     * Filter, which transfer_transactions to fetch.
     */
    where?: transfer_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfer_transactions to fetch.
     */
    orderBy?: transfer_transactionOrderByWithRelationInput | transfer_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transfer_transactions.
     */
    cursor?: transfer_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfer_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfer_transactions.
     */
    skip?: number
    distinct?: Transfer_transactionScalarFieldEnum | Transfer_transactionScalarFieldEnum[]
  }

  /**
   * transfer_transaction create
   */
  export type transfer_transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transfer_transaction.
     */
    data: XOR<transfer_transactionCreateInput, transfer_transactionUncheckedCreateInput>
  }

  /**
   * transfer_transaction createMany
   */
  export type transfer_transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transfer_transactions.
     */
    data: transfer_transactionCreateManyInput | transfer_transactionCreateManyInput[]
  }

  /**
   * transfer_transaction createManyAndReturn
   */
  export type transfer_transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transfer_transactions.
     */
    data: transfer_transactionCreateManyInput | transfer_transactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transfer_transaction update
   */
  export type transfer_transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transfer_transaction.
     */
    data: XOR<transfer_transactionUpdateInput, transfer_transactionUncheckedUpdateInput>
    /**
     * Choose, which transfer_transaction to update.
     */
    where: transfer_transactionWhereUniqueInput
  }

  /**
   * transfer_transaction updateMany
   */
  export type transfer_transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transfer_transactions.
     */
    data: XOR<transfer_transactionUpdateManyMutationInput, transfer_transactionUncheckedUpdateManyInput>
    /**
     * Filter which transfer_transactions to update
     */
    where?: transfer_transactionWhereInput
    /**
     * Limit how many transfer_transactions to update.
     */
    limit?: number
  }

  /**
   * transfer_transaction updateManyAndReturn
   */
  export type transfer_transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * The data used to update transfer_transactions.
     */
    data: XOR<transfer_transactionUpdateManyMutationInput, transfer_transactionUncheckedUpdateManyInput>
    /**
     * Filter which transfer_transactions to update
     */
    where?: transfer_transactionWhereInput
    /**
     * Limit how many transfer_transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transfer_transaction upsert
   */
  export type transfer_transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transfer_transaction to update in case it exists.
     */
    where: transfer_transactionWhereUniqueInput
    /**
     * In case the transfer_transaction found by the `where` argument doesn't exist, create a new transfer_transaction with this data.
     */
    create: XOR<transfer_transactionCreateInput, transfer_transactionUncheckedCreateInput>
    /**
     * In case the transfer_transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transfer_transactionUpdateInput, transfer_transactionUncheckedUpdateInput>
  }

  /**
   * transfer_transaction delete
   */
  export type transfer_transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
    /**
     * Filter which transfer_transaction to delete.
     */
    where: transfer_transactionWhereUniqueInput
  }

  /**
   * transfer_transaction deleteMany
   */
  export type transfer_transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transfer_transactions to delete
     */
    where?: transfer_transactionWhereInput
    /**
     * Limit how many transfer_transactions to delete.
     */
    limit?: number
  }

  /**
   * transfer_transaction without action
   */
  export type transfer_transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfer_transaction
     */
    select?: transfer_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfer_transaction
     */
    omit?: transfer_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfer_transactionInclude<ExtArgs> | null
  }


  /**
   * Model expense_transaction
   */

  export type AggregateExpense_transaction = {
    _count: Expense_transactionCountAggregateOutputType | null
    _min: Expense_transactionMinAggregateOutputType | null
    _max: Expense_transactionMaxAggregateOutputType | null
  }

  export type Expense_transactionMinAggregateOutputType = {
    id: string | null
    account_id: string | null
    expense_item_id: string | null
    transaction_id: string | null
  }

  export type Expense_transactionMaxAggregateOutputType = {
    id: string | null
    account_id: string | null
    expense_item_id: string | null
    transaction_id: string | null
  }

  export type Expense_transactionCountAggregateOutputType = {
    id: number
    account_id: number
    expense_item_id: number
    transaction_id: number
    _all: number
  }


  export type Expense_transactionMinAggregateInputType = {
    id?: true
    account_id?: true
    expense_item_id?: true
    transaction_id?: true
  }

  export type Expense_transactionMaxAggregateInputType = {
    id?: true
    account_id?: true
    expense_item_id?: true
    transaction_id?: true
  }

  export type Expense_transactionCountAggregateInputType = {
    id?: true
    account_id?: true
    expense_item_id?: true
    transaction_id?: true
    _all?: true
  }

  export type Expense_transactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense_transaction to aggregate.
     */
    where?: expense_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_transactions to fetch.
     */
    orderBy?: expense_transactionOrderByWithRelationInput | expense_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expense_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expense_transactions
    **/
    _count?: true | Expense_transactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Expense_transactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Expense_transactionMaxAggregateInputType
  }

  export type GetExpense_transactionAggregateType<T extends Expense_transactionAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense_transaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense_transaction[P]>
      : GetScalarType<T[P], AggregateExpense_transaction[P]>
  }




  export type expense_transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expense_transactionWhereInput
    orderBy?: expense_transactionOrderByWithAggregationInput | expense_transactionOrderByWithAggregationInput[]
    by: Expense_transactionScalarFieldEnum[] | Expense_transactionScalarFieldEnum
    having?: expense_transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Expense_transactionCountAggregateInputType | true
    _min?: Expense_transactionMinAggregateInputType
    _max?: Expense_transactionMaxAggregateInputType
  }

  export type Expense_transactionGroupByOutputType = {
    id: string
    account_id: string
    expense_item_id: string
    transaction_id: string
    _count: Expense_transactionCountAggregateOutputType | null
    _min: Expense_transactionMinAggregateOutputType | null
    _max: Expense_transactionMaxAggregateOutputType | null
  }

  type GetExpense_transactionGroupByPayload<T extends expense_transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Expense_transactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Expense_transactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Expense_transactionGroupByOutputType[P]>
            : GetScalarType<T[P], Expense_transactionGroupByOutputType[P]>
        }
      >
    >


  export type expense_transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    expense_item_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
    expense_item?: boolean | expense_itemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense_transaction"]>

  export type expense_transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    expense_item_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
    expense_item?: boolean | expense_itemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense_transaction"]>

  export type expense_transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    expense_item_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
    expense_item?: boolean | expense_itemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense_transaction"]>

  export type expense_transactionSelectScalar = {
    id?: boolean
    account_id?: boolean
    expense_item_id?: boolean
    transaction_id?: boolean
  }

  export type expense_transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "expense_item_id" | "transaction_id", ExtArgs["result"]["expense_transaction"]>
  export type expense_transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
    expense_item?: boolean | expense_itemDefaultArgs<ExtArgs>
  }
  export type expense_transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
    expense_item?: boolean | expense_itemDefaultArgs<ExtArgs>
  }
  export type expense_transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
    expense_item?: boolean | expense_itemDefaultArgs<ExtArgs>
  }

  export type $expense_transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expense_transaction"
    objects: {
      transaction: Prisma.$transactionPayload<ExtArgs>
      account: Prisma.$accountPayload<ExtArgs>
      expense_item: Prisma.$expense_itemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      account_id: string
      expense_item_id: string
      transaction_id: string
    }, ExtArgs["result"]["expense_transaction"]>
    composites: {}
  }

  type expense_transactionGetPayload<S extends boolean | null | undefined | expense_transactionDefaultArgs> = $Result.GetResult<Prisma.$expense_transactionPayload, S>

  type expense_transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expense_transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Expense_transactionCountAggregateInputType | true
    }

  export interface expense_transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expense_transaction'], meta: { name: 'expense_transaction' } }
    /**
     * Find zero or one Expense_transaction that matches the filter.
     * @param {expense_transactionFindUniqueArgs} args - Arguments to find a Expense_transaction
     * @example
     * // Get one Expense_transaction
     * const expense_transaction = await prisma.expense_transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expense_transactionFindUniqueArgs>(args: SelectSubset<T, expense_transactionFindUniqueArgs<ExtArgs>>): Prisma__expense_transactionClient<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense_transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expense_transactionFindUniqueOrThrowArgs} args - Arguments to find a Expense_transaction
     * @example
     * // Get one Expense_transaction
     * const expense_transaction = await prisma.expense_transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expense_transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, expense_transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expense_transactionClient<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense_transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_transactionFindFirstArgs} args - Arguments to find a Expense_transaction
     * @example
     * // Get one Expense_transaction
     * const expense_transaction = await prisma.expense_transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expense_transactionFindFirstArgs>(args?: SelectSubset<T, expense_transactionFindFirstArgs<ExtArgs>>): Prisma__expense_transactionClient<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense_transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_transactionFindFirstOrThrowArgs} args - Arguments to find a Expense_transaction
     * @example
     * // Get one Expense_transaction
     * const expense_transaction = await prisma.expense_transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expense_transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, expense_transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__expense_transactionClient<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expense_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expense_transactions
     * const expense_transactions = await prisma.expense_transaction.findMany()
     * 
     * // Get first 10 Expense_transactions
     * const expense_transactions = await prisma.expense_transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expense_transactionWithIdOnly = await prisma.expense_transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expense_transactionFindManyArgs>(args?: SelectSubset<T, expense_transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense_transaction.
     * @param {expense_transactionCreateArgs} args - Arguments to create a Expense_transaction.
     * @example
     * // Create one Expense_transaction
     * const Expense_transaction = await prisma.expense_transaction.create({
     *   data: {
     *     // ... data to create a Expense_transaction
     *   }
     * })
     * 
     */
    create<T extends expense_transactionCreateArgs>(args: SelectSubset<T, expense_transactionCreateArgs<ExtArgs>>): Prisma__expense_transactionClient<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expense_transactions.
     * @param {expense_transactionCreateManyArgs} args - Arguments to create many Expense_transactions.
     * @example
     * // Create many Expense_transactions
     * const expense_transaction = await prisma.expense_transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expense_transactionCreateManyArgs>(args?: SelectSubset<T, expense_transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expense_transactions and returns the data saved in the database.
     * @param {expense_transactionCreateManyAndReturnArgs} args - Arguments to create many Expense_transactions.
     * @example
     * // Create many Expense_transactions
     * const expense_transaction = await prisma.expense_transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expense_transactions and only return the `id`
     * const expense_transactionWithIdOnly = await prisma.expense_transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends expense_transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, expense_transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense_transaction.
     * @param {expense_transactionDeleteArgs} args - Arguments to delete one Expense_transaction.
     * @example
     * // Delete one Expense_transaction
     * const Expense_transaction = await prisma.expense_transaction.delete({
     *   where: {
     *     // ... filter to delete one Expense_transaction
     *   }
     * })
     * 
     */
    delete<T extends expense_transactionDeleteArgs>(args: SelectSubset<T, expense_transactionDeleteArgs<ExtArgs>>): Prisma__expense_transactionClient<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense_transaction.
     * @param {expense_transactionUpdateArgs} args - Arguments to update one Expense_transaction.
     * @example
     * // Update one Expense_transaction
     * const expense_transaction = await prisma.expense_transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expense_transactionUpdateArgs>(args: SelectSubset<T, expense_transactionUpdateArgs<ExtArgs>>): Prisma__expense_transactionClient<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expense_transactions.
     * @param {expense_transactionDeleteManyArgs} args - Arguments to filter Expense_transactions to delete.
     * @example
     * // Delete a few Expense_transactions
     * const { count } = await prisma.expense_transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expense_transactionDeleteManyArgs>(args?: SelectSubset<T, expense_transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expense_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expense_transactions
     * const expense_transaction = await prisma.expense_transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expense_transactionUpdateManyArgs>(args: SelectSubset<T, expense_transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expense_transactions and returns the data updated in the database.
     * @param {expense_transactionUpdateManyAndReturnArgs} args - Arguments to update many Expense_transactions.
     * @example
     * // Update many Expense_transactions
     * const expense_transaction = await prisma.expense_transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expense_transactions and only return the `id`
     * const expense_transactionWithIdOnly = await prisma.expense_transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends expense_transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, expense_transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense_transaction.
     * @param {expense_transactionUpsertArgs} args - Arguments to update or create a Expense_transaction.
     * @example
     * // Update or create a Expense_transaction
     * const expense_transaction = await prisma.expense_transaction.upsert({
     *   create: {
     *     // ... data to create a Expense_transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense_transaction we want to update
     *   }
     * })
     */
    upsert<T extends expense_transactionUpsertArgs>(args: SelectSubset<T, expense_transactionUpsertArgs<ExtArgs>>): Prisma__expense_transactionClient<$Result.GetResult<Prisma.$expense_transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expense_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_transactionCountArgs} args - Arguments to filter Expense_transactions to count.
     * @example
     * // Count the number of Expense_transactions
     * const count = await prisma.expense_transaction.count({
     *   where: {
     *     // ... the filter for the Expense_transactions we want to count
     *   }
     * })
    **/
    count<T extends expense_transactionCountArgs>(
      args?: Subset<T, expense_transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Expense_transactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Expense_transactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Expense_transactionAggregateArgs>(args: Subset<T, Expense_transactionAggregateArgs>): Prisma.PrismaPromise<GetExpense_transactionAggregateType<T>>

    /**
     * Group by Expense_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends expense_transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expense_transactionGroupByArgs['orderBy'] }
        : { orderBy?: expense_transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, expense_transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpense_transactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expense_transaction model
   */
  readonly fields: expense_transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expense_transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expense_transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends transactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transactionDefaultArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expense_item<T extends expense_itemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, expense_itemDefaultArgs<ExtArgs>>): Prisma__expense_itemClient<$Result.GetResult<Prisma.$expense_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the expense_transaction model
   */
  interface expense_transactionFieldRefs {
    readonly id: FieldRef<"expense_transaction", 'String'>
    readonly account_id: FieldRef<"expense_transaction", 'String'>
    readonly expense_item_id: FieldRef<"expense_transaction", 'String'>
    readonly transaction_id: FieldRef<"expense_transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * expense_transaction findUnique
   */
  export type expense_transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    /**
     * Filter, which expense_transaction to fetch.
     */
    where: expense_transactionWhereUniqueInput
  }

  /**
   * expense_transaction findUniqueOrThrow
   */
  export type expense_transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    /**
     * Filter, which expense_transaction to fetch.
     */
    where: expense_transactionWhereUniqueInput
  }

  /**
   * expense_transaction findFirst
   */
  export type expense_transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    /**
     * Filter, which expense_transaction to fetch.
     */
    where?: expense_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_transactions to fetch.
     */
    orderBy?: expense_transactionOrderByWithRelationInput | expense_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expense_transactions.
     */
    cursor?: expense_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expense_transactions.
     */
    distinct?: Expense_transactionScalarFieldEnum | Expense_transactionScalarFieldEnum[]
  }

  /**
   * expense_transaction findFirstOrThrow
   */
  export type expense_transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    /**
     * Filter, which expense_transaction to fetch.
     */
    where?: expense_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_transactions to fetch.
     */
    orderBy?: expense_transactionOrderByWithRelationInput | expense_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expense_transactions.
     */
    cursor?: expense_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expense_transactions.
     */
    distinct?: Expense_transactionScalarFieldEnum | Expense_transactionScalarFieldEnum[]
  }

  /**
   * expense_transaction findMany
   */
  export type expense_transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    /**
     * Filter, which expense_transactions to fetch.
     */
    where?: expense_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_transactions to fetch.
     */
    orderBy?: expense_transactionOrderByWithRelationInput | expense_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expense_transactions.
     */
    cursor?: expense_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_transactions.
     */
    skip?: number
    distinct?: Expense_transactionScalarFieldEnum | Expense_transactionScalarFieldEnum[]
  }

  /**
   * expense_transaction create
   */
  export type expense_transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a expense_transaction.
     */
    data: XOR<expense_transactionCreateInput, expense_transactionUncheckedCreateInput>
  }

  /**
   * expense_transaction createMany
   */
  export type expense_transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expense_transactions.
     */
    data: expense_transactionCreateManyInput | expense_transactionCreateManyInput[]
  }

  /**
   * expense_transaction createManyAndReturn
   */
  export type expense_transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * The data used to create many expense_transactions.
     */
    data: expense_transactionCreateManyInput | expense_transactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * expense_transaction update
   */
  export type expense_transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a expense_transaction.
     */
    data: XOR<expense_transactionUpdateInput, expense_transactionUncheckedUpdateInput>
    /**
     * Choose, which expense_transaction to update.
     */
    where: expense_transactionWhereUniqueInput
  }

  /**
   * expense_transaction updateMany
   */
  export type expense_transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expense_transactions.
     */
    data: XOR<expense_transactionUpdateManyMutationInput, expense_transactionUncheckedUpdateManyInput>
    /**
     * Filter which expense_transactions to update
     */
    where?: expense_transactionWhereInput
    /**
     * Limit how many expense_transactions to update.
     */
    limit?: number
  }

  /**
   * expense_transaction updateManyAndReturn
   */
  export type expense_transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * The data used to update expense_transactions.
     */
    data: XOR<expense_transactionUpdateManyMutationInput, expense_transactionUncheckedUpdateManyInput>
    /**
     * Filter which expense_transactions to update
     */
    where?: expense_transactionWhereInput
    /**
     * Limit how many expense_transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * expense_transaction upsert
   */
  export type expense_transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the expense_transaction to update in case it exists.
     */
    where: expense_transactionWhereUniqueInput
    /**
     * In case the expense_transaction found by the `where` argument doesn't exist, create a new expense_transaction with this data.
     */
    create: XOR<expense_transactionCreateInput, expense_transactionUncheckedCreateInput>
    /**
     * In case the expense_transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expense_transactionUpdateInput, expense_transactionUncheckedUpdateInput>
  }

  /**
   * expense_transaction delete
   */
  export type expense_transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
    /**
     * Filter which expense_transaction to delete.
     */
    where: expense_transactionWhereUniqueInput
  }

  /**
   * expense_transaction deleteMany
   */
  export type expense_transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense_transactions to delete
     */
    where?: expense_transactionWhereInput
    /**
     * Limit how many expense_transactions to delete.
     */
    limit?: number
  }

  /**
   * expense_transaction without action
   */
  export type expense_transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_transaction
     */
    select?: expense_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_transaction
     */
    omit?: expense_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_transactionInclude<ExtArgs> | null
  }


  /**
   * Model income_transaction
   */

  export type AggregateIncome_transaction = {
    _count: Income_transactionCountAggregateOutputType | null
    _min: Income_transactionMinAggregateOutputType | null
    _max: Income_transactionMaxAggregateOutputType | null
  }

  export type Income_transactionMinAggregateOutputType = {
    id: string | null
    income_source_id: string | null
    account_id: string | null
    transaction_id: string | null
  }

  export type Income_transactionMaxAggregateOutputType = {
    id: string | null
    income_source_id: string | null
    account_id: string | null
    transaction_id: string | null
  }

  export type Income_transactionCountAggregateOutputType = {
    id: number
    income_source_id: number
    account_id: number
    transaction_id: number
    _all: number
  }


  export type Income_transactionMinAggregateInputType = {
    id?: true
    income_source_id?: true
    account_id?: true
    transaction_id?: true
  }

  export type Income_transactionMaxAggregateInputType = {
    id?: true
    income_source_id?: true
    account_id?: true
    transaction_id?: true
  }

  export type Income_transactionCountAggregateInputType = {
    id?: true
    income_source_id?: true
    account_id?: true
    transaction_id?: true
    _all?: true
  }

  export type Income_transactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which income_transaction to aggregate.
     */
    where?: income_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of income_transactions to fetch.
     */
    orderBy?: income_transactionOrderByWithRelationInput | income_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: income_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` income_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` income_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned income_transactions
    **/
    _count?: true | Income_transactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Income_transactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Income_transactionMaxAggregateInputType
  }

  export type GetIncome_transactionAggregateType<T extends Income_transactionAggregateArgs> = {
        [P in keyof T & keyof AggregateIncome_transaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncome_transaction[P]>
      : GetScalarType<T[P], AggregateIncome_transaction[P]>
  }




  export type income_transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: income_transactionWhereInput
    orderBy?: income_transactionOrderByWithAggregationInput | income_transactionOrderByWithAggregationInput[]
    by: Income_transactionScalarFieldEnum[] | Income_transactionScalarFieldEnum
    having?: income_transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Income_transactionCountAggregateInputType | true
    _min?: Income_transactionMinAggregateInputType
    _max?: Income_transactionMaxAggregateInputType
  }

  export type Income_transactionGroupByOutputType = {
    id: string
    income_source_id: string
    account_id: string
    transaction_id: string
    _count: Income_transactionCountAggregateOutputType | null
    _min: Income_transactionMinAggregateOutputType | null
    _max: Income_transactionMaxAggregateOutputType | null
  }

  type GetIncome_transactionGroupByPayload<T extends income_transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Income_transactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Income_transactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Income_transactionGroupByOutputType[P]>
            : GetScalarType<T[P], Income_transactionGroupByOutputType[P]>
        }
      >
    >


  export type income_transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    income_source_id?: boolean
    account_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    income_source?: boolean | income_sourceDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income_transaction"]>

  export type income_transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    income_source_id?: boolean
    account_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    income_source?: boolean | income_sourceDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income_transaction"]>

  export type income_transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    income_source_id?: boolean
    account_id?: boolean
    transaction_id?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    income_source?: boolean | income_sourceDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income_transaction"]>

  export type income_transactionSelectScalar = {
    id?: boolean
    income_source_id?: boolean
    account_id?: boolean
    transaction_id?: boolean
  }

  export type income_transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "income_source_id" | "account_id" | "transaction_id", ExtArgs["result"]["income_transaction"]>
  export type income_transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    income_source?: boolean | income_sourceDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
  }
  export type income_transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    income_source?: boolean | income_sourceDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
  }
  export type income_transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
    income_source?: boolean | income_sourceDefaultArgs<ExtArgs>
    account?: boolean | accountDefaultArgs<ExtArgs>
  }

  export type $income_transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "income_transaction"
    objects: {
      transaction: Prisma.$transactionPayload<ExtArgs>
      income_source: Prisma.$income_sourcePayload<ExtArgs>
      account: Prisma.$accountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      income_source_id: string
      account_id: string
      transaction_id: string
    }, ExtArgs["result"]["income_transaction"]>
    composites: {}
  }

  type income_transactionGetPayload<S extends boolean | null | undefined | income_transactionDefaultArgs> = $Result.GetResult<Prisma.$income_transactionPayload, S>

  type income_transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<income_transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Income_transactionCountAggregateInputType | true
    }

  export interface income_transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['income_transaction'], meta: { name: 'income_transaction' } }
    /**
     * Find zero or one Income_transaction that matches the filter.
     * @param {income_transactionFindUniqueArgs} args - Arguments to find a Income_transaction
     * @example
     * // Get one Income_transaction
     * const income_transaction = await prisma.income_transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends income_transactionFindUniqueArgs>(args: SelectSubset<T, income_transactionFindUniqueArgs<ExtArgs>>): Prisma__income_transactionClient<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Income_transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {income_transactionFindUniqueOrThrowArgs} args - Arguments to find a Income_transaction
     * @example
     * // Get one Income_transaction
     * const income_transaction = await prisma.income_transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends income_transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, income_transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__income_transactionClient<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income_transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_transactionFindFirstArgs} args - Arguments to find a Income_transaction
     * @example
     * // Get one Income_transaction
     * const income_transaction = await prisma.income_transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends income_transactionFindFirstArgs>(args?: SelectSubset<T, income_transactionFindFirstArgs<ExtArgs>>): Prisma__income_transactionClient<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income_transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_transactionFindFirstOrThrowArgs} args - Arguments to find a Income_transaction
     * @example
     * // Get one Income_transaction
     * const income_transaction = await prisma.income_transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends income_transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, income_transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__income_transactionClient<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Income_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Income_transactions
     * const income_transactions = await prisma.income_transaction.findMany()
     * 
     * // Get first 10 Income_transactions
     * const income_transactions = await prisma.income_transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const income_transactionWithIdOnly = await prisma.income_transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends income_transactionFindManyArgs>(args?: SelectSubset<T, income_transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Income_transaction.
     * @param {income_transactionCreateArgs} args - Arguments to create a Income_transaction.
     * @example
     * // Create one Income_transaction
     * const Income_transaction = await prisma.income_transaction.create({
     *   data: {
     *     // ... data to create a Income_transaction
     *   }
     * })
     * 
     */
    create<T extends income_transactionCreateArgs>(args: SelectSubset<T, income_transactionCreateArgs<ExtArgs>>): Prisma__income_transactionClient<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Income_transactions.
     * @param {income_transactionCreateManyArgs} args - Arguments to create many Income_transactions.
     * @example
     * // Create many Income_transactions
     * const income_transaction = await prisma.income_transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends income_transactionCreateManyArgs>(args?: SelectSubset<T, income_transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Income_transactions and returns the data saved in the database.
     * @param {income_transactionCreateManyAndReturnArgs} args - Arguments to create many Income_transactions.
     * @example
     * // Create many Income_transactions
     * const income_transaction = await prisma.income_transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Income_transactions and only return the `id`
     * const income_transactionWithIdOnly = await prisma.income_transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends income_transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, income_transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Income_transaction.
     * @param {income_transactionDeleteArgs} args - Arguments to delete one Income_transaction.
     * @example
     * // Delete one Income_transaction
     * const Income_transaction = await prisma.income_transaction.delete({
     *   where: {
     *     // ... filter to delete one Income_transaction
     *   }
     * })
     * 
     */
    delete<T extends income_transactionDeleteArgs>(args: SelectSubset<T, income_transactionDeleteArgs<ExtArgs>>): Prisma__income_transactionClient<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Income_transaction.
     * @param {income_transactionUpdateArgs} args - Arguments to update one Income_transaction.
     * @example
     * // Update one Income_transaction
     * const income_transaction = await prisma.income_transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends income_transactionUpdateArgs>(args: SelectSubset<T, income_transactionUpdateArgs<ExtArgs>>): Prisma__income_transactionClient<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Income_transactions.
     * @param {income_transactionDeleteManyArgs} args - Arguments to filter Income_transactions to delete.
     * @example
     * // Delete a few Income_transactions
     * const { count } = await prisma.income_transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends income_transactionDeleteManyArgs>(args?: SelectSubset<T, income_transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Income_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Income_transactions
     * const income_transaction = await prisma.income_transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends income_transactionUpdateManyArgs>(args: SelectSubset<T, income_transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Income_transactions and returns the data updated in the database.
     * @param {income_transactionUpdateManyAndReturnArgs} args - Arguments to update many Income_transactions.
     * @example
     * // Update many Income_transactions
     * const income_transaction = await prisma.income_transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Income_transactions and only return the `id`
     * const income_transactionWithIdOnly = await prisma.income_transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends income_transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, income_transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Income_transaction.
     * @param {income_transactionUpsertArgs} args - Arguments to update or create a Income_transaction.
     * @example
     * // Update or create a Income_transaction
     * const income_transaction = await prisma.income_transaction.upsert({
     *   create: {
     *     // ... data to create a Income_transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Income_transaction we want to update
     *   }
     * })
     */
    upsert<T extends income_transactionUpsertArgs>(args: SelectSubset<T, income_transactionUpsertArgs<ExtArgs>>): Prisma__income_transactionClient<$Result.GetResult<Prisma.$income_transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Income_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_transactionCountArgs} args - Arguments to filter Income_transactions to count.
     * @example
     * // Count the number of Income_transactions
     * const count = await prisma.income_transaction.count({
     *   where: {
     *     // ... the filter for the Income_transactions we want to count
     *   }
     * })
    **/
    count<T extends income_transactionCountArgs>(
      args?: Subset<T, income_transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Income_transactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Income_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Income_transactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Income_transactionAggregateArgs>(args: Subset<T, Income_transactionAggregateArgs>): Prisma.PrismaPromise<GetIncome_transactionAggregateType<T>>

    /**
     * Group by Income_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {income_transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends income_transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: income_transactionGroupByArgs['orderBy'] }
        : { orderBy?: income_transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, income_transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncome_transactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the income_transaction model
   */
  readonly fields: income_transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for income_transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__income_transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends transactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transactionDefaultArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    income_source<T extends income_sourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, income_sourceDefaultArgs<ExtArgs>>): Prisma__income_sourceClient<$Result.GetResult<Prisma.$income_sourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the income_transaction model
   */
  interface income_transactionFieldRefs {
    readonly id: FieldRef<"income_transaction", 'String'>
    readonly income_source_id: FieldRef<"income_transaction", 'String'>
    readonly account_id: FieldRef<"income_transaction", 'String'>
    readonly transaction_id: FieldRef<"income_transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * income_transaction findUnique
   */
  export type income_transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    /**
     * Filter, which income_transaction to fetch.
     */
    where: income_transactionWhereUniqueInput
  }

  /**
   * income_transaction findUniqueOrThrow
   */
  export type income_transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    /**
     * Filter, which income_transaction to fetch.
     */
    where: income_transactionWhereUniqueInput
  }

  /**
   * income_transaction findFirst
   */
  export type income_transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    /**
     * Filter, which income_transaction to fetch.
     */
    where?: income_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of income_transactions to fetch.
     */
    orderBy?: income_transactionOrderByWithRelationInput | income_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for income_transactions.
     */
    cursor?: income_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` income_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` income_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of income_transactions.
     */
    distinct?: Income_transactionScalarFieldEnum | Income_transactionScalarFieldEnum[]
  }

  /**
   * income_transaction findFirstOrThrow
   */
  export type income_transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    /**
     * Filter, which income_transaction to fetch.
     */
    where?: income_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of income_transactions to fetch.
     */
    orderBy?: income_transactionOrderByWithRelationInput | income_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for income_transactions.
     */
    cursor?: income_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` income_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` income_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of income_transactions.
     */
    distinct?: Income_transactionScalarFieldEnum | Income_transactionScalarFieldEnum[]
  }

  /**
   * income_transaction findMany
   */
  export type income_transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    /**
     * Filter, which income_transactions to fetch.
     */
    where?: income_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of income_transactions to fetch.
     */
    orderBy?: income_transactionOrderByWithRelationInput | income_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing income_transactions.
     */
    cursor?: income_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` income_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` income_transactions.
     */
    skip?: number
    distinct?: Income_transactionScalarFieldEnum | Income_transactionScalarFieldEnum[]
  }

  /**
   * income_transaction create
   */
  export type income_transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a income_transaction.
     */
    data: XOR<income_transactionCreateInput, income_transactionUncheckedCreateInput>
  }

  /**
   * income_transaction createMany
   */
  export type income_transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many income_transactions.
     */
    data: income_transactionCreateManyInput | income_transactionCreateManyInput[]
  }

  /**
   * income_transaction createManyAndReturn
   */
  export type income_transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * The data used to create many income_transactions.
     */
    data: income_transactionCreateManyInput | income_transactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * income_transaction update
   */
  export type income_transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a income_transaction.
     */
    data: XOR<income_transactionUpdateInput, income_transactionUncheckedUpdateInput>
    /**
     * Choose, which income_transaction to update.
     */
    where: income_transactionWhereUniqueInput
  }

  /**
   * income_transaction updateMany
   */
  export type income_transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update income_transactions.
     */
    data: XOR<income_transactionUpdateManyMutationInput, income_transactionUncheckedUpdateManyInput>
    /**
     * Filter which income_transactions to update
     */
    where?: income_transactionWhereInput
    /**
     * Limit how many income_transactions to update.
     */
    limit?: number
  }

  /**
   * income_transaction updateManyAndReturn
   */
  export type income_transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * The data used to update income_transactions.
     */
    data: XOR<income_transactionUpdateManyMutationInput, income_transactionUncheckedUpdateManyInput>
    /**
     * Filter which income_transactions to update
     */
    where?: income_transactionWhereInput
    /**
     * Limit how many income_transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * income_transaction upsert
   */
  export type income_transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the income_transaction to update in case it exists.
     */
    where: income_transactionWhereUniqueInput
    /**
     * In case the income_transaction found by the `where` argument doesn't exist, create a new income_transaction with this data.
     */
    create: XOR<income_transactionCreateInput, income_transactionUncheckedCreateInput>
    /**
     * In case the income_transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<income_transactionUpdateInput, income_transactionUncheckedUpdateInput>
  }

  /**
   * income_transaction delete
   */
  export type income_transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
    /**
     * Filter which income_transaction to delete.
     */
    where: income_transactionWhereUniqueInput
  }

  /**
   * income_transaction deleteMany
   */
  export type income_transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which income_transactions to delete
     */
    where?: income_transactionWhereInput
    /**
     * Limit how many income_transactions to delete.
     */
    limit?: number
  }

  /**
   * income_transaction without action
   */
  export type income_transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the income_transaction
     */
    select?: income_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the income_transaction
     */
    omit?: income_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: income_transactionInclude<ExtArgs> | null
  }


  /**
   * Model db_history
   */

  export type AggregateDb_history = {
    _count: Db_historyCountAggregateOutputType | null
    _min: Db_historyMinAggregateOutputType | null
    _max: Db_historyMaxAggregateOutputType | null
  }

  export type Db_historyMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    event_type: $Enums.db_history_event_type | null
    entity_type: $Enums.db_history_entity_type | null
    entity_id: string | null
  }

  export type Db_historyMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    event_type: $Enums.db_history_event_type | null
    entity_type: $Enums.db_history_entity_type | null
    entity_id: string | null
  }

  export type Db_historyCountAggregateOutputType = {
    id: number
    timestamp: number
    event_type: number
    entity_type: number
    entity_id: number
    snapshot: number
    _all: number
  }


  export type Db_historyMinAggregateInputType = {
    id?: true
    timestamp?: true
    event_type?: true
    entity_type?: true
    entity_id?: true
  }

  export type Db_historyMaxAggregateInputType = {
    id?: true
    timestamp?: true
    event_type?: true
    entity_type?: true
    entity_id?: true
  }

  export type Db_historyCountAggregateInputType = {
    id?: true
    timestamp?: true
    event_type?: true
    entity_type?: true
    entity_id?: true
    snapshot?: true
    _all?: true
  }

  export type Db_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which db_history to aggregate.
     */
    where?: db_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_histories to fetch.
     */
    orderBy?: db_historyOrderByWithRelationInput | db_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: db_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned db_histories
    **/
    _count?: true | Db_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Db_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Db_historyMaxAggregateInputType
  }

  export type GetDb_historyAggregateType<T extends Db_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateDb_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDb_history[P]>
      : GetScalarType<T[P], AggregateDb_history[P]>
  }




  export type db_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: db_historyWhereInput
    orderBy?: db_historyOrderByWithAggregationInput | db_historyOrderByWithAggregationInput[]
    by: Db_historyScalarFieldEnum[] | Db_historyScalarFieldEnum
    having?: db_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Db_historyCountAggregateInputType | true
    _min?: Db_historyMinAggregateInputType
    _max?: Db_historyMaxAggregateInputType
  }

  export type Db_historyGroupByOutputType = {
    id: string
    timestamp: Date
    event_type: $Enums.db_history_event_type
    entity_type: $Enums.db_history_entity_type
    entity_id: string
    snapshot: JsonValue
    _count: Db_historyCountAggregateOutputType | null
    _min: Db_historyMinAggregateOutputType | null
    _max: Db_historyMaxAggregateOutputType | null
  }

  type GetDb_historyGroupByPayload<T extends db_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Db_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Db_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Db_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Db_historyGroupByOutputType[P]>
        }
      >
    >


  export type db_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    event_type?: boolean
    entity_type?: boolean
    entity_id?: boolean
    snapshot?: boolean
  }, ExtArgs["result"]["db_history"]>

  export type db_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    event_type?: boolean
    entity_type?: boolean
    entity_id?: boolean
    snapshot?: boolean
  }, ExtArgs["result"]["db_history"]>

  export type db_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    event_type?: boolean
    entity_type?: boolean
    entity_id?: boolean
    snapshot?: boolean
  }, ExtArgs["result"]["db_history"]>

  export type db_historySelectScalar = {
    id?: boolean
    timestamp?: boolean
    event_type?: boolean
    entity_type?: boolean
    entity_id?: boolean
    snapshot?: boolean
  }

  export type db_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "event_type" | "entity_type" | "entity_id" | "snapshot", ExtArgs["result"]["db_history"]>

  export type $db_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "db_history"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      event_type: $Enums.db_history_event_type
      entity_type: $Enums.db_history_entity_type
      entity_id: string
      snapshot: Prisma.JsonValue
    }, ExtArgs["result"]["db_history"]>
    composites: {}
  }

  type db_historyGetPayload<S extends boolean | null | undefined | db_historyDefaultArgs> = $Result.GetResult<Prisma.$db_historyPayload, S>

  type db_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<db_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Db_historyCountAggregateInputType | true
    }

  export interface db_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['db_history'], meta: { name: 'db_history' } }
    /**
     * Find zero or one Db_history that matches the filter.
     * @param {db_historyFindUniqueArgs} args - Arguments to find a Db_history
     * @example
     * // Get one Db_history
     * const db_history = await prisma.db_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends db_historyFindUniqueArgs>(args: SelectSubset<T, db_historyFindUniqueArgs<ExtArgs>>): Prisma__db_historyClient<$Result.GetResult<Prisma.$db_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Db_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {db_historyFindUniqueOrThrowArgs} args - Arguments to find a Db_history
     * @example
     * // Get one Db_history
     * const db_history = await prisma.db_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends db_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, db_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__db_historyClient<$Result.GetResult<Prisma.$db_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Db_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_historyFindFirstArgs} args - Arguments to find a Db_history
     * @example
     * // Get one Db_history
     * const db_history = await prisma.db_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends db_historyFindFirstArgs>(args?: SelectSubset<T, db_historyFindFirstArgs<ExtArgs>>): Prisma__db_historyClient<$Result.GetResult<Prisma.$db_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Db_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_historyFindFirstOrThrowArgs} args - Arguments to find a Db_history
     * @example
     * // Get one Db_history
     * const db_history = await prisma.db_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends db_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, db_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__db_historyClient<$Result.GetResult<Prisma.$db_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Db_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Db_histories
     * const db_histories = await prisma.db_history.findMany()
     * 
     * // Get first 10 Db_histories
     * const db_histories = await prisma.db_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const db_historyWithIdOnly = await prisma.db_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends db_historyFindManyArgs>(args?: SelectSubset<T, db_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$db_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Db_history.
     * @param {db_historyCreateArgs} args - Arguments to create a Db_history.
     * @example
     * // Create one Db_history
     * const Db_history = await prisma.db_history.create({
     *   data: {
     *     // ... data to create a Db_history
     *   }
     * })
     * 
     */
    create<T extends db_historyCreateArgs>(args: SelectSubset<T, db_historyCreateArgs<ExtArgs>>): Prisma__db_historyClient<$Result.GetResult<Prisma.$db_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Db_histories.
     * @param {db_historyCreateManyArgs} args - Arguments to create many Db_histories.
     * @example
     * // Create many Db_histories
     * const db_history = await prisma.db_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends db_historyCreateManyArgs>(args?: SelectSubset<T, db_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Db_histories and returns the data saved in the database.
     * @param {db_historyCreateManyAndReturnArgs} args - Arguments to create many Db_histories.
     * @example
     * // Create many Db_histories
     * const db_history = await prisma.db_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Db_histories and only return the `id`
     * const db_historyWithIdOnly = await prisma.db_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends db_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, db_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$db_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Db_history.
     * @param {db_historyDeleteArgs} args - Arguments to delete one Db_history.
     * @example
     * // Delete one Db_history
     * const Db_history = await prisma.db_history.delete({
     *   where: {
     *     // ... filter to delete one Db_history
     *   }
     * })
     * 
     */
    delete<T extends db_historyDeleteArgs>(args: SelectSubset<T, db_historyDeleteArgs<ExtArgs>>): Prisma__db_historyClient<$Result.GetResult<Prisma.$db_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Db_history.
     * @param {db_historyUpdateArgs} args - Arguments to update one Db_history.
     * @example
     * // Update one Db_history
     * const db_history = await prisma.db_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends db_historyUpdateArgs>(args: SelectSubset<T, db_historyUpdateArgs<ExtArgs>>): Prisma__db_historyClient<$Result.GetResult<Prisma.$db_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Db_histories.
     * @param {db_historyDeleteManyArgs} args - Arguments to filter Db_histories to delete.
     * @example
     * // Delete a few Db_histories
     * const { count } = await prisma.db_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends db_historyDeleteManyArgs>(args?: SelectSubset<T, db_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Db_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Db_histories
     * const db_history = await prisma.db_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends db_historyUpdateManyArgs>(args: SelectSubset<T, db_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Db_histories and returns the data updated in the database.
     * @param {db_historyUpdateManyAndReturnArgs} args - Arguments to update many Db_histories.
     * @example
     * // Update many Db_histories
     * const db_history = await prisma.db_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Db_histories and only return the `id`
     * const db_historyWithIdOnly = await prisma.db_history.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends db_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, db_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$db_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Db_history.
     * @param {db_historyUpsertArgs} args - Arguments to update or create a Db_history.
     * @example
     * // Update or create a Db_history
     * const db_history = await prisma.db_history.upsert({
     *   create: {
     *     // ... data to create a Db_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Db_history we want to update
     *   }
     * })
     */
    upsert<T extends db_historyUpsertArgs>(args: SelectSubset<T, db_historyUpsertArgs<ExtArgs>>): Prisma__db_historyClient<$Result.GetResult<Prisma.$db_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Db_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_historyCountArgs} args - Arguments to filter Db_histories to count.
     * @example
     * // Count the number of Db_histories
     * const count = await prisma.db_history.count({
     *   where: {
     *     // ... the filter for the Db_histories we want to count
     *   }
     * })
    **/
    count<T extends db_historyCountArgs>(
      args?: Subset<T, db_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Db_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Db_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Db_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Db_historyAggregateArgs>(args: Subset<T, Db_historyAggregateArgs>): Prisma.PrismaPromise<GetDb_historyAggregateType<T>>

    /**
     * Group by Db_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {db_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends db_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: db_historyGroupByArgs['orderBy'] }
        : { orderBy?: db_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, db_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDb_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the db_history model
   */
  readonly fields: db_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for db_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__db_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the db_history model
   */
  interface db_historyFieldRefs {
    readonly id: FieldRef<"db_history", 'String'>
    readonly timestamp: FieldRef<"db_history", 'DateTime'>
    readonly event_type: FieldRef<"db_history", 'db_history_event_type'>
    readonly entity_type: FieldRef<"db_history", 'db_history_entity_type'>
    readonly entity_id: FieldRef<"db_history", 'String'>
    readonly snapshot: FieldRef<"db_history", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * db_history findUnique
   */
  export type db_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
    /**
     * Filter, which db_history to fetch.
     */
    where: db_historyWhereUniqueInput
  }

  /**
   * db_history findUniqueOrThrow
   */
  export type db_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
    /**
     * Filter, which db_history to fetch.
     */
    where: db_historyWhereUniqueInput
  }

  /**
   * db_history findFirst
   */
  export type db_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
    /**
     * Filter, which db_history to fetch.
     */
    where?: db_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_histories to fetch.
     */
    orderBy?: db_historyOrderByWithRelationInput | db_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for db_histories.
     */
    cursor?: db_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of db_histories.
     */
    distinct?: Db_historyScalarFieldEnum | Db_historyScalarFieldEnum[]
  }

  /**
   * db_history findFirstOrThrow
   */
  export type db_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
    /**
     * Filter, which db_history to fetch.
     */
    where?: db_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_histories to fetch.
     */
    orderBy?: db_historyOrderByWithRelationInput | db_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for db_histories.
     */
    cursor?: db_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of db_histories.
     */
    distinct?: Db_historyScalarFieldEnum | Db_historyScalarFieldEnum[]
  }

  /**
   * db_history findMany
   */
  export type db_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
    /**
     * Filter, which db_histories to fetch.
     */
    where?: db_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of db_histories to fetch.
     */
    orderBy?: db_historyOrderByWithRelationInput | db_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing db_histories.
     */
    cursor?: db_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` db_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` db_histories.
     */
    skip?: number
    distinct?: Db_historyScalarFieldEnum | Db_historyScalarFieldEnum[]
  }

  /**
   * db_history create
   */
  export type db_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
    /**
     * The data needed to create a db_history.
     */
    data: XOR<db_historyCreateInput, db_historyUncheckedCreateInput>
  }

  /**
   * db_history createMany
   */
  export type db_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many db_histories.
     */
    data: db_historyCreateManyInput | db_historyCreateManyInput[]
  }

  /**
   * db_history createManyAndReturn
   */
  export type db_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
    /**
     * The data used to create many db_histories.
     */
    data: db_historyCreateManyInput | db_historyCreateManyInput[]
  }

  /**
   * db_history update
   */
  export type db_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
    /**
     * The data needed to update a db_history.
     */
    data: XOR<db_historyUpdateInput, db_historyUncheckedUpdateInput>
    /**
     * Choose, which db_history to update.
     */
    where: db_historyWhereUniqueInput
  }

  /**
   * db_history updateMany
   */
  export type db_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update db_histories.
     */
    data: XOR<db_historyUpdateManyMutationInput, db_historyUncheckedUpdateManyInput>
    /**
     * Filter which db_histories to update
     */
    where?: db_historyWhereInput
    /**
     * Limit how many db_histories to update.
     */
    limit?: number
  }

  /**
   * db_history updateManyAndReturn
   */
  export type db_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
    /**
     * The data used to update db_histories.
     */
    data: XOR<db_historyUpdateManyMutationInput, db_historyUncheckedUpdateManyInput>
    /**
     * Filter which db_histories to update
     */
    where?: db_historyWhereInput
    /**
     * Limit how many db_histories to update.
     */
    limit?: number
  }

  /**
   * db_history upsert
   */
  export type db_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
    /**
     * The filter to search for the db_history to update in case it exists.
     */
    where: db_historyWhereUniqueInput
    /**
     * In case the db_history found by the `where` argument doesn't exist, create a new db_history with this data.
     */
    create: XOR<db_historyCreateInput, db_historyUncheckedCreateInput>
    /**
     * In case the db_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<db_historyUpdateInput, db_historyUncheckedUpdateInput>
  }

  /**
   * db_history delete
   */
  export type db_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
    /**
     * Filter which db_history to delete.
     */
    where: db_historyWhereUniqueInput
  }

  /**
   * db_history deleteMany
   */
  export type db_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which db_histories to delete
     */
    where?: db_historyWhereInput
    /**
     * Limit how many db_histories to delete.
     */
    limit?: number
  }

  /**
   * db_history without action
   */
  export type db_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the db_history
     */
    select?: db_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the db_history
     */
    omit?: db_historyOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    group: 'group'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const Income_sourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    group: 'group'
  };

  export type Income_sourceScalarFieldEnum = (typeof Income_sourceScalarFieldEnum)[keyof typeof Income_sourceScalarFieldEnum]


  export const Expense_itemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    group: 'group'
  };

  export type Expense_itemScalarFieldEnum = (typeof Expense_itemScalarFieldEnum)[keyof typeof Expense_itemScalarFieldEnum]


  export const Mutual_fundScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isin: 'isin'
  };

  export type Mutual_fundScalarFieldEnum = (typeof Mutual_fundScalarFieldEnum)[keyof typeof Mutual_fundScalarFieldEnum]


  export const Units_lotScalarFieldEnum: {
    id: 'id',
    mutual_fund_id: 'mutual_fund_id'
  };

  export type Units_lotScalarFieldEnum = (typeof Units_lotScalarFieldEnum)[keyof typeof Units_lotScalarFieldEnum]


  export const Investment_transactionScalarFieldEnum: {
    id: 'id',
    from_account_id: 'from_account_id',
    units_bought: 'units_bought',
    buy_nav: 'buy_nav',
    allotment_date: 'allotment_date',
    units_lot_id: 'units_lot_id',
    transaction_id: 'transaction_id'
  };

  export type Investment_transactionScalarFieldEnum = (typeof Investment_transactionScalarFieldEnum)[keyof typeof Investment_transactionScalarFieldEnum]


  export const Redemption_transactionScalarFieldEnum: {
    id: 'id',
    to_account_id: 'to_account_id',
    sell_nav: 'sell_nav',
    redemption_date: 'redemption_date',
    transaction_id: 'transaction_id'
  };

  export type Redemption_transactionScalarFieldEnum = (typeof Redemption_transactionScalarFieldEnum)[keyof typeof Redemption_transactionScalarFieldEnum]


  export const Redemption_bucketScalarFieldEnum: {
    id: 'id',
    redemption_transaction_id: 'redemption_transaction_id',
    units_lot_id: 'units_lot_id',
    units_redeemed: 'units_redeemed'
  };

  export type Redemption_bucketScalarFieldEnum = (typeof Redemption_bucketScalarFieldEnum)[keyof typeof Redemption_bucketScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    date: 'date',
    time: 'time',
    amount: 'amount',
    type: 'type',
    note: 'note'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const Transfer_transactionScalarFieldEnum: {
    id: 'id',
    from_account_id: 'from_account_id',
    to_account_id: 'to_account_id',
    transaction_id: 'transaction_id'
  };

  export type Transfer_transactionScalarFieldEnum = (typeof Transfer_transactionScalarFieldEnum)[keyof typeof Transfer_transactionScalarFieldEnum]


  export const Expense_transactionScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    expense_item_id: 'expense_item_id',
    transaction_id: 'transaction_id'
  };

  export type Expense_transactionScalarFieldEnum = (typeof Expense_transactionScalarFieldEnum)[keyof typeof Expense_transactionScalarFieldEnum]


  export const Income_transactionScalarFieldEnum: {
    id: 'id',
    income_source_id: 'income_source_id',
    account_id: 'account_id',
    transaction_id: 'transaction_id'
  };

  export type Income_transactionScalarFieldEnum = (typeof Income_transactionScalarFieldEnum)[keyof typeof Income_transactionScalarFieldEnum]


  export const Db_historyScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    event_type: 'event_type',
    entity_type: 'entity_type',
    entity_id: 'entity_id',
    snapshot: 'snapshot'
  };

  export type Db_historyScalarFieldEnum = (typeof Db_historyScalarFieldEnum)[keyof typeof Db_historyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'transaction_type'
   */
  export type Enumtransaction_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaction_type'>
    


  /**
   * Reference to a field of type 'db_history_event_type'
   */
  export type Enumdb_history_event_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'db_history_event_type'>
    


  /**
   * Reference to a field of type 'db_history_entity_type'
   */
  export type Enumdb_history_entity_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'db_history_entity_type'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type accountWhereInput = {
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    id?: StringFilter<"account"> | string
    name?: StringFilter<"account"> | string
    group?: StringFilter<"account"> | string
    from_transfers?: Transfer_transactionListRelationFilter
    to_transfers?: Transfer_transactionListRelationFilter
    income_transactions?: Income_transactionListRelationFilter
    expense_transactions?: Expense_transactionListRelationFilter
    investment_transactions?: Investment_transactionListRelationFilter
    redemption_transactions?: Redemption_transactionListRelationFilter
  }

  export type accountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
    from_transfers?: transfer_transactionOrderByRelationAggregateInput
    to_transfers?: transfer_transactionOrderByRelationAggregateInput
    income_transactions?: income_transactionOrderByRelationAggregateInput
    expense_transactions?: expense_transactionOrderByRelationAggregateInput
    investment_transactions?: investment_transactionOrderByRelationAggregateInput
    redemption_transactions?: redemption_transactionOrderByRelationAggregateInput
  }

  export type accountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_group?: accountNameGroupCompoundUniqueInput
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    name?: StringFilter<"account"> | string
    group?: StringFilter<"account"> | string
    from_transfers?: Transfer_transactionListRelationFilter
    to_transfers?: Transfer_transactionListRelationFilter
    income_transactions?: Income_transactionListRelationFilter
    expense_transactions?: Expense_transactionListRelationFilter
    investment_transactions?: Investment_transactionListRelationFilter
    redemption_transactions?: Redemption_transactionListRelationFilter
  }, "id" | "name_group">

  export type accountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
    _count?: accountCountOrderByAggregateInput
    _max?: accountMaxOrderByAggregateInput
    _min?: accountMinOrderByAggregateInput
  }

  export type accountScalarWhereWithAggregatesInput = {
    AND?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    OR?: accountScalarWhereWithAggregatesInput[]
    NOT?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"account"> | string
    name?: StringWithAggregatesFilter<"account"> | string
    group?: StringWithAggregatesFilter<"account"> | string
  }

  export type income_sourceWhereInput = {
    AND?: income_sourceWhereInput | income_sourceWhereInput[]
    OR?: income_sourceWhereInput[]
    NOT?: income_sourceWhereInput | income_sourceWhereInput[]
    id?: StringFilter<"income_source"> | string
    name?: StringFilter<"income_source"> | string
    group?: StringFilter<"income_source"> | string
    transactions?: Income_transactionListRelationFilter
  }

  export type income_sourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
    transactions?: income_transactionOrderByRelationAggregateInput
  }

  export type income_sourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: income_sourceWhereInput | income_sourceWhereInput[]
    OR?: income_sourceWhereInput[]
    NOT?: income_sourceWhereInput | income_sourceWhereInput[]
    name?: StringFilter<"income_source"> | string
    group?: StringFilter<"income_source"> | string
    transactions?: Income_transactionListRelationFilter
  }, "id">

  export type income_sourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
    _count?: income_sourceCountOrderByAggregateInput
    _max?: income_sourceMaxOrderByAggregateInput
    _min?: income_sourceMinOrderByAggregateInput
  }

  export type income_sourceScalarWhereWithAggregatesInput = {
    AND?: income_sourceScalarWhereWithAggregatesInput | income_sourceScalarWhereWithAggregatesInput[]
    OR?: income_sourceScalarWhereWithAggregatesInput[]
    NOT?: income_sourceScalarWhereWithAggregatesInput | income_sourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"income_source"> | string
    name?: StringWithAggregatesFilter<"income_source"> | string
    group?: StringWithAggregatesFilter<"income_source"> | string
  }

  export type expense_itemWhereInput = {
    AND?: expense_itemWhereInput | expense_itemWhereInput[]
    OR?: expense_itemWhereInput[]
    NOT?: expense_itemWhereInput | expense_itemWhereInput[]
    id?: StringFilter<"expense_item"> | string
    name?: StringFilter<"expense_item"> | string
    group?: StringFilter<"expense_item"> | string
    transactions?: Expense_transactionListRelationFilter
  }

  export type expense_itemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
    transactions?: expense_transactionOrderByRelationAggregateInput
  }

  export type expense_itemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: expense_itemWhereInput | expense_itemWhereInput[]
    OR?: expense_itemWhereInput[]
    NOT?: expense_itemWhereInput | expense_itemWhereInput[]
    name?: StringFilter<"expense_item"> | string
    group?: StringFilter<"expense_item"> | string
    transactions?: Expense_transactionListRelationFilter
  }, "id">

  export type expense_itemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
    _count?: expense_itemCountOrderByAggregateInput
    _max?: expense_itemMaxOrderByAggregateInput
    _min?: expense_itemMinOrderByAggregateInput
  }

  export type expense_itemScalarWhereWithAggregatesInput = {
    AND?: expense_itemScalarWhereWithAggregatesInput | expense_itemScalarWhereWithAggregatesInput[]
    OR?: expense_itemScalarWhereWithAggregatesInput[]
    NOT?: expense_itemScalarWhereWithAggregatesInput | expense_itemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"expense_item"> | string
    name?: StringWithAggregatesFilter<"expense_item"> | string
    group?: StringWithAggregatesFilter<"expense_item"> | string
  }

  export type mutual_fundWhereInput = {
    AND?: mutual_fundWhereInput | mutual_fundWhereInput[]
    OR?: mutual_fundWhereInput[]
    NOT?: mutual_fundWhereInput | mutual_fundWhereInput[]
    id?: StringFilter<"mutual_fund"> | string
    name?: StringFilter<"mutual_fund"> | string
    isin?: StringFilter<"mutual_fund"> | string
    units_lots?: Units_lotListRelationFilter
  }

  export type mutual_fundOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isin?: SortOrder
    units_lots?: units_lotOrderByRelationAggregateInput
  }

  export type mutual_fundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    isin?: string
    AND?: mutual_fundWhereInput | mutual_fundWhereInput[]
    OR?: mutual_fundWhereInput[]
    NOT?: mutual_fundWhereInput | mutual_fundWhereInput[]
    units_lots?: Units_lotListRelationFilter
  }, "id" | "name" | "isin">

  export type mutual_fundOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isin?: SortOrder
    _count?: mutual_fundCountOrderByAggregateInput
    _max?: mutual_fundMaxOrderByAggregateInput
    _min?: mutual_fundMinOrderByAggregateInput
  }

  export type mutual_fundScalarWhereWithAggregatesInput = {
    AND?: mutual_fundScalarWhereWithAggregatesInput | mutual_fundScalarWhereWithAggregatesInput[]
    OR?: mutual_fundScalarWhereWithAggregatesInput[]
    NOT?: mutual_fundScalarWhereWithAggregatesInput | mutual_fundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"mutual_fund"> | string
    name?: StringWithAggregatesFilter<"mutual_fund"> | string
    isin?: StringWithAggregatesFilter<"mutual_fund"> | string
  }

  export type units_lotWhereInput = {
    AND?: units_lotWhereInput | units_lotWhereInput[]
    OR?: units_lotWhereInput[]
    NOT?: units_lotWhereInput | units_lotWhereInput[]
    id?: StringFilter<"units_lot"> | string
    mutual_fund_id?: StringFilter<"units_lot"> | string
    investment_transaction?: XOR<Investment_transactionNullableScalarRelationFilter, investment_transactionWhereInput> | null
    redemption_buckets?: Redemption_bucketListRelationFilter
    mutual_fund?: XOR<Mutual_fundScalarRelationFilter, mutual_fundWhereInput>
  }

  export type units_lotOrderByWithRelationInput = {
    id?: SortOrder
    mutual_fund_id?: SortOrder
    investment_transaction?: investment_transactionOrderByWithRelationInput
    redemption_buckets?: redemption_bucketOrderByRelationAggregateInput
    mutual_fund?: mutual_fundOrderByWithRelationInput
  }

  export type units_lotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: units_lotWhereInput | units_lotWhereInput[]
    OR?: units_lotWhereInput[]
    NOT?: units_lotWhereInput | units_lotWhereInput[]
    mutual_fund_id?: StringFilter<"units_lot"> | string
    investment_transaction?: XOR<Investment_transactionNullableScalarRelationFilter, investment_transactionWhereInput> | null
    redemption_buckets?: Redemption_bucketListRelationFilter
    mutual_fund?: XOR<Mutual_fundScalarRelationFilter, mutual_fundWhereInput>
  }, "id">

  export type units_lotOrderByWithAggregationInput = {
    id?: SortOrder
    mutual_fund_id?: SortOrder
    _count?: units_lotCountOrderByAggregateInput
    _max?: units_lotMaxOrderByAggregateInput
    _min?: units_lotMinOrderByAggregateInput
  }

  export type units_lotScalarWhereWithAggregatesInput = {
    AND?: units_lotScalarWhereWithAggregatesInput | units_lotScalarWhereWithAggregatesInput[]
    OR?: units_lotScalarWhereWithAggregatesInput[]
    NOT?: units_lotScalarWhereWithAggregatesInput | units_lotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"units_lot"> | string
    mutual_fund_id?: StringWithAggregatesFilter<"units_lot"> | string
  }

  export type investment_transactionWhereInput = {
    AND?: investment_transactionWhereInput | investment_transactionWhereInput[]
    OR?: investment_transactionWhereInput[]
    NOT?: investment_transactionWhereInput | investment_transactionWhereInput[]
    id?: StringFilter<"investment_transaction"> | string
    from_account_id?: StringFilter<"investment_transaction"> | string
    units_bought?: FloatFilter<"investment_transaction"> | number
    buy_nav?: FloatFilter<"investment_transaction"> | number
    allotment_date?: DateTimeFilter<"investment_transaction"> | Date | string
    units_lot_id?: StringFilter<"investment_transaction"> | string
    transaction_id?: StringFilter<"investment_transaction"> | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
    from_account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    units_lot?: XOR<Units_lotScalarRelationFilter, units_lotWhereInput>
  }

  export type investment_transactionOrderByWithRelationInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    units_bought?: SortOrder
    buy_nav?: SortOrder
    allotment_date?: SortOrder
    units_lot_id?: SortOrder
    transaction_id?: SortOrder
    transaction?: transactionOrderByWithRelationInput
    from_account?: accountOrderByWithRelationInput
    units_lot?: units_lotOrderByWithRelationInput
  }

  export type investment_transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    units_lot_id?: string
    transaction_id?: string
    AND?: investment_transactionWhereInput | investment_transactionWhereInput[]
    OR?: investment_transactionWhereInput[]
    NOT?: investment_transactionWhereInput | investment_transactionWhereInput[]
    from_account_id?: StringFilter<"investment_transaction"> | string
    units_bought?: FloatFilter<"investment_transaction"> | number
    buy_nav?: FloatFilter<"investment_transaction"> | number
    allotment_date?: DateTimeFilter<"investment_transaction"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
    from_account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    units_lot?: XOR<Units_lotScalarRelationFilter, units_lotWhereInput>
  }, "id" | "units_lot_id" | "transaction_id">

  export type investment_transactionOrderByWithAggregationInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    units_bought?: SortOrder
    buy_nav?: SortOrder
    allotment_date?: SortOrder
    units_lot_id?: SortOrder
    transaction_id?: SortOrder
    _count?: investment_transactionCountOrderByAggregateInput
    _avg?: investment_transactionAvgOrderByAggregateInput
    _max?: investment_transactionMaxOrderByAggregateInput
    _min?: investment_transactionMinOrderByAggregateInput
    _sum?: investment_transactionSumOrderByAggregateInput
  }

  export type investment_transactionScalarWhereWithAggregatesInput = {
    AND?: investment_transactionScalarWhereWithAggregatesInput | investment_transactionScalarWhereWithAggregatesInput[]
    OR?: investment_transactionScalarWhereWithAggregatesInput[]
    NOT?: investment_transactionScalarWhereWithAggregatesInput | investment_transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"investment_transaction"> | string
    from_account_id?: StringWithAggregatesFilter<"investment_transaction"> | string
    units_bought?: FloatWithAggregatesFilter<"investment_transaction"> | number
    buy_nav?: FloatWithAggregatesFilter<"investment_transaction"> | number
    allotment_date?: DateTimeWithAggregatesFilter<"investment_transaction"> | Date | string
    units_lot_id?: StringWithAggregatesFilter<"investment_transaction"> | string
    transaction_id?: StringWithAggregatesFilter<"investment_transaction"> | string
  }

  export type redemption_transactionWhereInput = {
    AND?: redemption_transactionWhereInput | redemption_transactionWhereInput[]
    OR?: redemption_transactionWhereInput[]
    NOT?: redemption_transactionWhereInput | redemption_transactionWhereInput[]
    id?: StringFilter<"redemption_transaction"> | string
    to_account_id?: StringFilter<"redemption_transaction"> | string
    sell_nav?: FloatFilter<"redemption_transaction"> | number
    redemption_date?: DateTimeFilter<"redemption_transaction"> | Date | string
    transaction_id?: StringFilter<"redemption_transaction"> | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
    to_account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    redemption_buckets?: Redemption_bucketListRelationFilter
  }

  export type redemption_transactionOrderByWithRelationInput = {
    id?: SortOrder
    to_account_id?: SortOrder
    sell_nav?: SortOrder
    redemption_date?: SortOrder
    transaction_id?: SortOrder
    transaction?: transactionOrderByWithRelationInput
    to_account?: accountOrderByWithRelationInput
    redemption_buckets?: redemption_bucketOrderByRelationAggregateInput
  }

  export type redemption_transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transaction_id?: string
    AND?: redemption_transactionWhereInput | redemption_transactionWhereInput[]
    OR?: redemption_transactionWhereInput[]
    NOT?: redemption_transactionWhereInput | redemption_transactionWhereInput[]
    to_account_id?: StringFilter<"redemption_transaction"> | string
    sell_nav?: FloatFilter<"redemption_transaction"> | number
    redemption_date?: DateTimeFilter<"redemption_transaction"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
    to_account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    redemption_buckets?: Redemption_bucketListRelationFilter
  }, "id" | "transaction_id">

  export type redemption_transactionOrderByWithAggregationInput = {
    id?: SortOrder
    to_account_id?: SortOrder
    sell_nav?: SortOrder
    redemption_date?: SortOrder
    transaction_id?: SortOrder
    _count?: redemption_transactionCountOrderByAggregateInput
    _avg?: redemption_transactionAvgOrderByAggregateInput
    _max?: redemption_transactionMaxOrderByAggregateInput
    _min?: redemption_transactionMinOrderByAggregateInput
    _sum?: redemption_transactionSumOrderByAggregateInput
  }

  export type redemption_transactionScalarWhereWithAggregatesInput = {
    AND?: redemption_transactionScalarWhereWithAggregatesInput | redemption_transactionScalarWhereWithAggregatesInput[]
    OR?: redemption_transactionScalarWhereWithAggregatesInput[]
    NOT?: redemption_transactionScalarWhereWithAggregatesInput | redemption_transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"redemption_transaction"> | string
    to_account_id?: StringWithAggregatesFilter<"redemption_transaction"> | string
    sell_nav?: FloatWithAggregatesFilter<"redemption_transaction"> | number
    redemption_date?: DateTimeWithAggregatesFilter<"redemption_transaction"> | Date | string
    transaction_id?: StringWithAggregatesFilter<"redemption_transaction"> | string
  }

  export type redemption_bucketWhereInput = {
    AND?: redemption_bucketWhereInput | redemption_bucketWhereInput[]
    OR?: redemption_bucketWhereInput[]
    NOT?: redemption_bucketWhereInput | redemption_bucketWhereInput[]
    id?: StringFilter<"redemption_bucket"> | string
    redemption_transaction_id?: StringFilter<"redemption_bucket"> | string
    units_lot_id?: StringFilter<"redemption_bucket"> | string
    units_redeemed?: FloatFilter<"redemption_bucket"> | number
    redemption_transaction?: XOR<Redemption_transactionScalarRelationFilter, redemption_transactionWhereInput>
    units_lot?: XOR<Units_lotScalarRelationFilter, units_lotWhereInput>
  }

  export type redemption_bucketOrderByWithRelationInput = {
    id?: SortOrder
    redemption_transaction_id?: SortOrder
    units_lot_id?: SortOrder
    units_redeemed?: SortOrder
    redemption_transaction?: redemption_transactionOrderByWithRelationInput
    units_lot?: units_lotOrderByWithRelationInput
  }

  export type redemption_bucketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: redemption_bucketWhereInput | redemption_bucketWhereInput[]
    OR?: redemption_bucketWhereInput[]
    NOT?: redemption_bucketWhereInput | redemption_bucketWhereInput[]
    redemption_transaction_id?: StringFilter<"redemption_bucket"> | string
    units_lot_id?: StringFilter<"redemption_bucket"> | string
    units_redeemed?: FloatFilter<"redemption_bucket"> | number
    redemption_transaction?: XOR<Redemption_transactionScalarRelationFilter, redemption_transactionWhereInput>
    units_lot?: XOR<Units_lotScalarRelationFilter, units_lotWhereInput>
  }, "id">

  export type redemption_bucketOrderByWithAggregationInput = {
    id?: SortOrder
    redemption_transaction_id?: SortOrder
    units_lot_id?: SortOrder
    units_redeemed?: SortOrder
    _count?: redemption_bucketCountOrderByAggregateInput
    _avg?: redemption_bucketAvgOrderByAggregateInput
    _max?: redemption_bucketMaxOrderByAggregateInput
    _min?: redemption_bucketMinOrderByAggregateInput
    _sum?: redemption_bucketSumOrderByAggregateInput
  }

  export type redemption_bucketScalarWhereWithAggregatesInput = {
    AND?: redemption_bucketScalarWhereWithAggregatesInput | redemption_bucketScalarWhereWithAggregatesInput[]
    OR?: redemption_bucketScalarWhereWithAggregatesInput[]
    NOT?: redemption_bucketScalarWhereWithAggregatesInput | redemption_bucketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"redemption_bucket"> | string
    redemption_transaction_id?: StringWithAggregatesFilter<"redemption_bucket"> | string
    units_lot_id?: StringWithAggregatesFilter<"redemption_bucket"> | string
    units_redeemed?: FloatWithAggregatesFilter<"redemption_bucket"> | number
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: StringFilter<"transaction"> | string
    created_at?: DateTimeFilter<"transaction"> | Date | string
    date?: DateTimeFilter<"transaction"> | Date | string
    time?: DateTimeNullableFilter<"transaction"> | Date | string | null
    amount?: FloatFilter<"transaction"> | number
    type?: Enumtransaction_typeFilter<"transaction"> | $Enums.transaction_type
    note?: StringNullableFilter<"transaction"> | string | null
    transfer_transaction?: XOR<Transfer_transactionNullableScalarRelationFilter, transfer_transactionWhereInput> | null
    expense_transaction?: XOR<Expense_transactionNullableScalarRelationFilter, expense_transactionWhereInput> | null
    income_transaction?: XOR<Income_transactionNullableScalarRelationFilter, income_transactionWhereInput> | null
    investment_transaction?: XOR<Investment_transactionNullableScalarRelationFilter, investment_transactionWhereInput> | null
    redemption_transaction?: XOR<Redemption_transactionNullableScalarRelationFilter, redemption_transactionWhereInput> | null
  }

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    date?: SortOrder
    time?: SortOrderInput | SortOrder
    amount?: SortOrder
    type?: SortOrder
    note?: SortOrderInput | SortOrder
    transfer_transaction?: transfer_transactionOrderByWithRelationInput
    expense_transaction?: expense_transactionOrderByWithRelationInput
    income_transaction?: income_transactionOrderByWithRelationInput
    investment_transaction?: investment_transactionOrderByWithRelationInput
    redemption_transaction?: redemption_transactionOrderByWithRelationInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    created_at?: DateTimeFilter<"transaction"> | Date | string
    date?: DateTimeFilter<"transaction"> | Date | string
    time?: DateTimeNullableFilter<"transaction"> | Date | string | null
    amount?: FloatFilter<"transaction"> | number
    type?: Enumtransaction_typeFilter<"transaction"> | $Enums.transaction_type
    note?: StringNullableFilter<"transaction"> | string | null
    transfer_transaction?: XOR<Transfer_transactionNullableScalarRelationFilter, transfer_transactionWhereInput> | null
    expense_transaction?: XOR<Expense_transactionNullableScalarRelationFilter, expense_transactionWhereInput> | null
    income_transaction?: XOR<Income_transactionNullableScalarRelationFilter, income_transactionWhereInput> | null
    investment_transaction?: XOR<Investment_transactionNullableScalarRelationFilter, investment_transactionWhereInput> | null
    redemption_transaction?: XOR<Redemption_transactionNullableScalarRelationFilter, redemption_transactionWhereInput> | null
  }, "id">

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    date?: SortOrder
    time?: SortOrderInput | SortOrder
    amount?: SortOrder
    type?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transaction"> | string
    created_at?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    date?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    time?: DateTimeNullableWithAggregatesFilter<"transaction"> | Date | string | null
    amount?: FloatWithAggregatesFilter<"transaction"> | number
    type?: Enumtransaction_typeWithAggregatesFilter<"transaction"> | $Enums.transaction_type
    note?: StringNullableWithAggregatesFilter<"transaction"> | string | null
  }

  export type transfer_transactionWhereInput = {
    AND?: transfer_transactionWhereInput | transfer_transactionWhereInput[]
    OR?: transfer_transactionWhereInput[]
    NOT?: transfer_transactionWhereInput | transfer_transactionWhereInput[]
    id?: StringFilter<"transfer_transaction"> | string
    from_account_id?: StringFilter<"transfer_transaction"> | string
    to_account_id?: StringFilter<"transfer_transaction"> | string
    transaction_id?: StringFilter<"transfer_transaction"> | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
    from_account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    to_account?: XOR<AccountScalarRelationFilter, accountWhereInput>
  }

  export type transfer_transactionOrderByWithRelationInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    to_account_id?: SortOrder
    transaction_id?: SortOrder
    transaction?: transactionOrderByWithRelationInput
    from_account?: accountOrderByWithRelationInput
    to_account?: accountOrderByWithRelationInput
  }

  export type transfer_transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transaction_id?: string
    AND?: transfer_transactionWhereInput | transfer_transactionWhereInput[]
    OR?: transfer_transactionWhereInput[]
    NOT?: transfer_transactionWhereInput | transfer_transactionWhereInput[]
    from_account_id?: StringFilter<"transfer_transaction"> | string
    to_account_id?: StringFilter<"transfer_transaction"> | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
    from_account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    to_account?: XOR<AccountScalarRelationFilter, accountWhereInput>
  }, "id" | "transaction_id">

  export type transfer_transactionOrderByWithAggregationInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    to_account_id?: SortOrder
    transaction_id?: SortOrder
    _count?: transfer_transactionCountOrderByAggregateInput
    _max?: transfer_transactionMaxOrderByAggregateInput
    _min?: transfer_transactionMinOrderByAggregateInput
  }

  export type transfer_transactionScalarWhereWithAggregatesInput = {
    AND?: transfer_transactionScalarWhereWithAggregatesInput | transfer_transactionScalarWhereWithAggregatesInput[]
    OR?: transfer_transactionScalarWhereWithAggregatesInput[]
    NOT?: transfer_transactionScalarWhereWithAggregatesInput | transfer_transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transfer_transaction"> | string
    from_account_id?: StringWithAggregatesFilter<"transfer_transaction"> | string
    to_account_id?: StringWithAggregatesFilter<"transfer_transaction"> | string
    transaction_id?: StringWithAggregatesFilter<"transfer_transaction"> | string
  }

  export type expense_transactionWhereInput = {
    AND?: expense_transactionWhereInput | expense_transactionWhereInput[]
    OR?: expense_transactionWhereInput[]
    NOT?: expense_transactionWhereInput | expense_transactionWhereInput[]
    id?: StringFilter<"expense_transaction"> | string
    account_id?: StringFilter<"expense_transaction"> | string
    expense_item_id?: StringFilter<"expense_transaction"> | string
    transaction_id?: StringFilter<"expense_transaction"> | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    expense_item?: XOR<Expense_itemScalarRelationFilter, expense_itemWhereInput>
  }

  export type expense_transactionOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    expense_item_id?: SortOrder
    transaction_id?: SortOrder
    transaction?: transactionOrderByWithRelationInput
    account?: accountOrderByWithRelationInput
    expense_item?: expense_itemOrderByWithRelationInput
  }

  export type expense_transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transaction_id?: string
    AND?: expense_transactionWhereInput | expense_transactionWhereInput[]
    OR?: expense_transactionWhereInput[]
    NOT?: expense_transactionWhereInput | expense_transactionWhereInput[]
    account_id?: StringFilter<"expense_transaction"> | string
    expense_item_id?: StringFilter<"expense_transaction"> | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    expense_item?: XOR<Expense_itemScalarRelationFilter, expense_itemWhereInput>
  }, "id" | "transaction_id">

  export type expense_transactionOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    expense_item_id?: SortOrder
    transaction_id?: SortOrder
    _count?: expense_transactionCountOrderByAggregateInput
    _max?: expense_transactionMaxOrderByAggregateInput
    _min?: expense_transactionMinOrderByAggregateInput
  }

  export type expense_transactionScalarWhereWithAggregatesInput = {
    AND?: expense_transactionScalarWhereWithAggregatesInput | expense_transactionScalarWhereWithAggregatesInput[]
    OR?: expense_transactionScalarWhereWithAggregatesInput[]
    NOT?: expense_transactionScalarWhereWithAggregatesInput | expense_transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"expense_transaction"> | string
    account_id?: StringWithAggregatesFilter<"expense_transaction"> | string
    expense_item_id?: StringWithAggregatesFilter<"expense_transaction"> | string
    transaction_id?: StringWithAggregatesFilter<"expense_transaction"> | string
  }

  export type income_transactionWhereInput = {
    AND?: income_transactionWhereInput | income_transactionWhereInput[]
    OR?: income_transactionWhereInput[]
    NOT?: income_transactionWhereInput | income_transactionWhereInput[]
    id?: StringFilter<"income_transaction"> | string
    income_source_id?: StringFilter<"income_transaction"> | string
    account_id?: StringFilter<"income_transaction"> | string
    transaction_id?: StringFilter<"income_transaction"> | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
    income_source?: XOR<Income_sourceScalarRelationFilter, income_sourceWhereInput>
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
  }

  export type income_transactionOrderByWithRelationInput = {
    id?: SortOrder
    income_source_id?: SortOrder
    account_id?: SortOrder
    transaction_id?: SortOrder
    transaction?: transactionOrderByWithRelationInput
    income_source?: income_sourceOrderByWithRelationInput
    account?: accountOrderByWithRelationInput
  }

  export type income_transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transaction_id?: string
    AND?: income_transactionWhereInput | income_transactionWhereInput[]
    OR?: income_transactionWhereInput[]
    NOT?: income_transactionWhereInput | income_transactionWhereInput[]
    income_source_id?: StringFilter<"income_transaction"> | string
    account_id?: StringFilter<"income_transaction"> | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
    income_source?: XOR<Income_sourceScalarRelationFilter, income_sourceWhereInput>
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
  }, "id" | "transaction_id">

  export type income_transactionOrderByWithAggregationInput = {
    id?: SortOrder
    income_source_id?: SortOrder
    account_id?: SortOrder
    transaction_id?: SortOrder
    _count?: income_transactionCountOrderByAggregateInput
    _max?: income_transactionMaxOrderByAggregateInput
    _min?: income_transactionMinOrderByAggregateInput
  }

  export type income_transactionScalarWhereWithAggregatesInput = {
    AND?: income_transactionScalarWhereWithAggregatesInput | income_transactionScalarWhereWithAggregatesInput[]
    OR?: income_transactionScalarWhereWithAggregatesInput[]
    NOT?: income_transactionScalarWhereWithAggregatesInput | income_transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"income_transaction"> | string
    income_source_id?: StringWithAggregatesFilter<"income_transaction"> | string
    account_id?: StringWithAggregatesFilter<"income_transaction"> | string
    transaction_id?: StringWithAggregatesFilter<"income_transaction"> | string
  }

  export type db_historyWhereInput = {
    AND?: db_historyWhereInput | db_historyWhereInput[]
    OR?: db_historyWhereInput[]
    NOT?: db_historyWhereInput | db_historyWhereInput[]
    id?: StringFilter<"db_history"> | string
    timestamp?: DateTimeFilter<"db_history"> | Date | string
    event_type?: Enumdb_history_event_typeFilter<"db_history"> | $Enums.db_history_event_type
    entity_type?: Enumdb_history_entity_typeFilter<"db_history"> | $Enums.db_history_entity_type
    entity_id?: StringFilter<"db_history"> | string
    snapshot?: JsonFilter<"db_history">
  }

  export type db_historyOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    event_type?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    snapshot?: SortOrder
  }

  export type db_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: db_historyWhereInput | db_historyWhereInput[]
    OR?: db_historyWhereInput[]
    NOT?: db_historyWhereInput | db_historyWhereInput[]
    timestamp?: DateTimeFilter<"db_history"> | Date | string
    event_type?: Enumdb_history_event_typeFilter<"db_history"> | $Enums.db_history_event_type
    entity_type?: Enumdb_history_entity_typeFilter<"db_history"> | $Enums.db_history_entity_type
    entity_id?: StringFilter<"db_history"> | string
    snapshot?: JsonFilter<"db_history">
  }, "id">

  export type db_historyOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    event_type?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    snapshot?: SortOrder
    _count?: db_historyCountOrderByAggregateInput
    _max?: db_historyMaxOrderByAggregateInput
    _min?: db_historyMinOrderByAggregateInput
  }

  export type db_historyScalarWhereWithAggregatesInput = {
    AND?: db_historyScalarWhereWithAggregatesInput | db_historyScalarWhereWithAggregatesInput[]
    OR?: db_historyScalarWhereWithAggregatesInput[]
    NOT?: db_historyScalarWhereWithAggregatesInput | db_historyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"db_history"> | string
    timestamp?: DateTimeWithAggregatesFilter<"db_history"> | Date | string
    event_type?: Enumdb_history_event_typeWithAggregatesFilter<"db_history"> | $Enums.db_history_event_type
    entity_type?: Enumdb_history_entity_typeWithAggregatesFilter<"db_history"> | $Enums.db_history_entity_type
    entity_id?: StringWithAggregatesFilter<"db_history"> | string
    snapshot?: JsonWithAggregatesFilter<"db_history">
  }

  export type accountCreateInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionCreateNestedManyWithoutFrom_accountInput
    to_transfers?: transfer_transactionCreateNestedManyWithoutTo_accountInput
    income_transactions?: income_transactionCreateNestedManyWithoutAccountInput
    expense_transactions?: expense_transactionCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionCreateNestedManyWithoutFrom_accountInput
    redemption_transactions?: redemption_transactionCreateNestedManyWithoutTo_accountInput
  }

  export type accountUncheckedCreateInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
    to_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutTo_accountInput
    income_transactions?: income_transactionUncheckedCreateNestedManyWithoutAccountInput
    expense_transactions?: expense_transactionUncheckedCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
    redemption_transactions?: redemption_transactionUncheckedCreateNestedManyWithoutTo_accountInput
  }

  export type accountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUpdateManyWithoutFrom_accountNestedInput
    to_transfers?: transfer_transactionUpdateManyWithoutTo_accountNestedInput
    income_transactions?: income_transactionUpdateManyWithoutAccountNestedInput
    expense_transactions?: expense_transactionUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUpdateManyWithoutFrom_accountNestedInput
    redemption_transactions?: redemption_transactionUpdateManyWithoutTo_accountNestedInput
  }

  export type accountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
    to_transfers?: transfer_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
    income_transactions?: income_transactionUncheckedUpdateManyWithoutAccountNestedInput
    expense_transactions?: expense_transactionUncheckedUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
    redemption_transactions?: redemption_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
  }

  export type accountCreateManyInput = {
    id?: string
    name: string
    group: string
  }

  export type accountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
  }

  export type accountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
  }

  export type income_sourceCreateInput = {
    id?: string
    name: string
    group: string
    transactions?: income_transactionCreateNestedManyWithoutIncome_sourceInput
  }

  export type income_sourceUncheckedCreateInput = {
    id?: string
    name: string
    group: string
    transactions?: income_transactionUncheckedCreateNestedManyWithoutIncome_sourceInput
  }

  export type income_sourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    transactions?: income_transactionUpdateManyWithoutIncome_sourceNestedInput
  }

  export type income_sourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    transactions?: income_transactionUncheckedUpdateManyWithoutIncome_sourceNestedInput
  }

  export type income_sourceCreateManyInput = {
    id?: string
    name: string
    group: string
  }

  export type income_sourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
  }

  export type income_sourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
  }

  export type expense_itemCreateInput = {
    id?: string
    name: string
    group: string
    transactions?: expense_transactionCreateNestedManyWithoutExpense_itemInput
  }

  export type expense_itemUncheckedCreateInput = {
    id?: string
    name: string
    group: string
    transactions?: expense_transactionUncheckedCreateNestedManyWithoutExpense_itemInput
  }

  export type expense_itemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    transactions?: expense_transactionUpdateManyWithoutExpense_itemNestedInput
  }

  export type expense_itemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    transactions?: expense_transactionUncheckedUpdateManyWithoutExpense_itemNestedInput
  }

  export type expense_itemCreateManyInput = {
    id?: string
    name: string
    group: string
  }

  export type expense_itemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
  }

  export type expense_itemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
  }

  export type mutual_fundCreateInput = {
    id?: string
    name: string
    isin: string
    units_lots?: units_lotCreateNestedManyWithoutMutual_fundInput
  }

  export type mutual_fundUncheckedCreateInput = {
    id?: string
    name: string
    isin: string
    units_lots?: units_lotUncheckedCreateNestedManyWithoutMutual_fundInput
  }

  export type mutual_fundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isin?: StringFieldUpdateOperationsInput | string
    units_lots?: units_lotUpdateManyWithoutMutual_fundNestedInput
  }

  export type mutual_fundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isin?: StringFieldUpdateOperationsInput | string
    units_lots?: units_lotUncheckedUpdateManyWithoutMutual_fundNestedInput
  }

  export type mutual_fundCreateManyInput = {
    id?: string
    name: string
    isin: string
  }

  export type mutual_fundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isin?: StringFieldUpdateOperationsInput | string
  }

  export type mutual_fundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isin?: StringFieldUpdateOperationsInput | string
  }

  export type units_lotCreateInput = {
    id?: string
    investment_transaction?: investment_transactionCreateNestedOneWithoutUnits_lotInput
    redemption_buckets?: redemption_bucketCreateNestedManyWithoutUnits_lotInput
    mutual_fund: mutual_fundCreateNestedOneWithoutUnits_lotsInput
  }

  export type units_lotUncheckedCreateInput = {
    id?: string
    mutual_fund_id: string
    investment_transaction?: investment_transactionUncheckedCreateNestedOneWithoutUnits_lotInput
    redemption_buckets?: redemption_bucketUncheckedCreateNestedManyWithoutUnits_lotInput
  }

  export type units_lotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    investment_transaction?: investment_transactionUpdateOneWithoutUnits_lotNestedInput
    redemption_buckets?: redemption_bucketUpdateManyWithoutUnits_lotNestedInput
    mutual_fund?: mutual_fundUpdateOneRequiredWithoutUnits_lotsNestedInput
  }

  export type units_lotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutual_fund_id?: StringFieldUpdateOperationsInput | string
    investment_transaction?: investment_transactionUncheckedUpdateOneWithoutUnits_lotNestedInput
    redemption_buckets?: redemption_bucketUncheckedUpdateManyWithoutUnits_lotNestedInput
  }

  export type units_lotCreateManyInput = {
    id?: string
    mutual_fund_id: string
  }

  export type units_lotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type units_lotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutual_fund_id?: StringFieldUpdateOperationsInput | string
  }

  export type investment_transactionCreateInput = {
    id?: string
    units_bought: number
    buy_nav: number
    allotment_date: Date | string
    transaction: transactionCreateNestedOneWithoutInvestment_transactionInput
    from_account: accountCreateNestedOneWithoutInvestment_transactionsInput
    units_lot: units_lotCreateNestedOneWithoutInvestment_transactionInput
  }

  export type investment_transactionUncheckedCreateInput = {
    id?: string
    from_account_id: string
    units_bought: number
    buy_nav: number
    allotment_date: Date | string
    units_lot_id: string
    transaction_id: string
  }

  export type investment_transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_bought?: FloatFieldUpdateOperationsInput | number
    buy_nav?: FloatFieldUpdateOperationsInput | number
    allotment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: transactionUpdateOneRequiredWithoutInvestment_transactionNestedInput
    from_account?: accountUpdateOneRequiredWithoutInvestment_transactionsNestedInput
    units_lot?: units_lotUpdateOneRequiredWithoutInvestment_transactionNestedInput
  }

  export type investment_transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    units_bought?: FloatFieldUpdateOperationsInput | number
    buy_nav?: FloatFieldUpdateOperationsInput | number
    allotment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    units_lot_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type investment_transactionCreateManyInput = {
    id?: string
    from_account_id: string
    units_bought: number
    buy_nav: number
    allotment_date: Date | string
    units_lot_id: string
    transaction_id: string
  }

  export type investment_transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_bought?: FloatFieldUpdateOperationsInput | number
    buy_nav?: FloatFieldUpdateOperationsInput | number
    allotment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type investment_transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    units_bought?: FloatFieldUpdateOperationsInput | number
    buy_nav?: FloatFieldUpdateOperationsInput | number
    allotment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    units_lot_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type redemption_transactionCreateInput = {
    id?: string
    sell_nav: number
    redemption_date: Date | string
    transaction: transactionCreateNestedOneWithoutRedemption_transactionInput
    to_account: accountCreateNestedOneWithoutRedemption_transactionsInput
    redemption_buckets?: redemption_bucketCreateNestedManyWithoutRedemption_transactionInput
  }

  export type redemption_transactionUncheckedCreateInput = {
    id?: string
    to_account_id: string
    sell_nav: number
    redemption_date: Date | string
    transaction_id: string
    redemption_buckets?: redemption_bucketUncheckedCreateNestedManyWithoutRedemption_transactionInput
  }

  export type redemption_transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sell_nav?: FloatFieldUpdateOperationsInput | number
    redemption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: transactionUpdateOneRequiredWithoutRedemption_transactionNestedInput
    to_account?: accountUpdateOneRequiredWithoutRedemption_transactionsNestedInput
    redemption_buckets?: redemption_bucketUpdateManyWithoutRedemption_transactionNestedInput
  }

  export type redemption_transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    sell_nav?: FloatFieldUpdateOperationsInput | number
    redemption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    redemption_buckets?: redemption_bucketUncheckedUpdateManyWithoutRedemption_transactionNestedInput
  }

  export type redemption_transactionCreateManyInput = {
    id?: string
    to_account_id: string
    sell_nav: number
    redemption_date: Date | string
    transaction_id: string
  }

  export type redemption_transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sell_nav?: FloatFieldUpdateOperationsInput | number
    redemption_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type redemption_transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    sell_nav?: FloatFieldUpdateOperationsInput | number
    redemption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type redemption_bucketCreateInput = {
    id?: string
    units_redeemed: number
    redemption_transaction: redemption_transactionCreateNestedOneWithoutRedemption_bucketsInput
    units_lot: units_lotCreateNestedOneWithoutRedemption_bucketsInput
  }

  export type redemption_bucketUncheckedCreateInput = {
    id?: string
    redemption_transaction_id: string
    units_lot_id: string
    units_redeemed: number
  }

  export type redemption_bucketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_redeemed?: FloatFieldUpdateOperationsInput | number
    redemption_transaction?: redemption_transactionUpdateOneRequiredWithoutRedemption_bucketsNestedInput
    units_lot?: units_lotUpdateOneRequiredWithoutRedemption_bucketsNestedInput
  }

  export type redemption_bucketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    redemption_transaction_id?: StringFieldUpdateOperationsInput | string
    units_lot_id?: StringFieldUpdateOperationsInput | string
    units_redeemed?: FloatFieldUpdateOperationsInput | number
  }

  export type redemption_bucketCreateManyInput = {
    id?: string
    redemption_transaction_id: string
    units_lot_id: string
    units_redeemed: number
  }

  export type redemption_bucketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_redeemed?: FloatFieldUpdateOperationsInput | number
  }

  export type redemption_bucketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    redemption_transaction_id?: StringFieldUpdateOperationsInput | string
    units_lot_id?: StringFieldUpdateOperationsInput | string
    units_redeemed?: FloatFieldUpdateOperationsInput | number
  }

  export type transactionCreateInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    transfer_transaction?: transfer_transactionCreateNestedOneWithoutTransactionInput
    expense_transaction?: expense_transactionCreateNestedOneWithoutTransactionInput
    income_transaction?: income_transactionCreateNestedOneWithoutTransactionInput
    investment_transaction?: investment_transactionCreateNestedOneWithoutTransactionInput
    redemption_transaction?: redemption_transactionCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    transfer_transaction?: transfer_transactionUncheckedCreateNestedOneWithoutTransactionInput
    expense_transaction?: expense_transactionUncheckedCreateNestedOneWithoutTransactionInput
    income_transaction?: income_transactionUncheckedCreateNestedOneWithoutTransactionInput
    investment_transaction?: investment_transactionUncheckedCreateNestedOneWithoutTransactionInput
    redemption_transaction?: redemption_transactionUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transfer_transaction?: transfer_transactionUpdateOneWithoutTransactionNestedInput
    expense_transaction?: expense_transactionUpdateOneWithoutTransactionNestedInput
    income_transaction?: income_transactionUpdateOneWithoutTransactionNestedInput
    investment_transaction?: investment_transactionUpdateOneWithoutTransactionNestedInput
    redemption_transaction?: redemption_transactionUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transfer_transaction?: transfer_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    expense_transaction?: expense_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    income_transaction?: income_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    investment_transaction?: investment_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    redemption_transaction?: redemption_transactionUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type transactionCreateManyInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
  }

  export type transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transfer_transactionCreateInput = {
    id?: string
    transaction: transactionCreateNestedOneWithoutTransfer_transactionInput
    from_account: accountCreateNestedOneWithoutFrom_transfersInput
    to_account: accountCreateNestedOneWithoutTo_transfersInput
  }

  export type transfer_transactionUncheckedCreateInput = {
    id?: string
    from_account_id: string
    to_account_id: string
    transaction_id: string
  }

  export type transfer_transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUpdateOneRequiredWithoutTransfer_transactionNestedInput
    from_account?: accountUpdateOneRequiredWithoutFrom_transfersNestedInput
    to_account?: accountUpdateOneRequiredWithoutTo_transfersNestedInput
  }

  export type transfer_transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type transfer_transactionCreateManyInput = {
    id?: string
    from_account_id: string
    to_account_id: string
    transaction_id: string
  }

  export type transfer_transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type transfer_transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type expense_transactionCreateInput = {
    id?: string
    transaction: transactionCreateNestedOneWithoutExpense_transactionInput
    account: accountCreateNestedOneWithoutExpense_transactionsInput
    expense_item: expense_itemCreateNestedOneWithoutTransactionsInput
  }

  export type expense_transactionUncheckedCreateInput = {
    id?: string
    account_id: string
    expense_item_id: string
    transaction_id: string
  }

  export type expense_transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUpdateOneRequiredWithoutExpense_transactionNestedInput
    account?: accountUpdateOneRequiredWithoutExpense_transactionsNestedInput
    expense_item?: expense_itemUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type expense_transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    expense_item_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type expense_transactionCreateManyInput = {
    id?: string
    account_id: string
    expense_item_id: string
    transaction_id: string
  }

  export type expense_transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type expense_transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    expense_item_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type income_transactionCreateInput = {
    id?: string
    transaction: transactionCreateNestedOneWithoutIncome_transactionInput
    income_source: income_sourceCreateNestedOneWithoutTransactionsInput
    account: accountCreateNestedOneWithoutIncome_transactionsInput
  }

  export type income_transactionUncheckedCreateInput = {
    id?: string
    income_source_id: string
    account_id: string
    transaction_id: string
  }

  export type income_transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUpdateOneRequiredWithoutIncome_transactionNestedInput
    income_source?: income_sourceUpdateOneRequiredWithoutTransactionsNestedInput
    account?: accountUpdateOneRequiredWithoutIncome_transactionsNestedInput
  }

  export type income_transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    income_source_id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type income_transactionCreateManyInput = {
    id?: string
    income_source_id: string
    account_id: string
    transaction_id: string
  }

  export type income_transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type income_transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    income_source_id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type db_historyCreateInput = {
    id?: string
    timestamp?: Date | string
    event_type: $Enums.db_history_event_type
    entity_type: $Enums.db_history_entity_type
    entity_id: string
    snapshot: JsonNullValueInput | InputJsonValue
  }

  export type db_historyUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    event_type: $Enums.db_history_event_type
    entity_type: $Enums.db_history_entity_type
    entity_id: string
    snapshot: JsonNullValueInput | InputJsonValue
  }

  export type db_historyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: Enumdb_history_event_typeFieldUpdateOperationsInput | $Enums.db_history_event_type
    entity_type?: Enumdb_history_entity_typeFieldUpdateOperationsInput | $Enums.db_history_entity_type
    entity_id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
  }

  export type db_historyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: Enumdb_history_event_typeFieldUpdateOperationsInput | $Enums.db_history_event_type
    entity_type?: Enumdb_history_entity_typeFieldUpdateOperationsInput | $Enums.db_history_entity_type
    entity_id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
  }

  export type db_historyCreateManyInput = {
    id?: string
    timestamp?: Date | string
    event_type: $Enums.db_history_event_type
    entity_type: $Enums.db_history_entity_type
    entity_id: string
    snapshot: JsonNullValueInput | InputJsonValue
  }

  export type db_historyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: Enumdb_history_event_typeFieldUpdateOperationsInput | $Enums.db_history_event_type
    entity_type?: Enumdb_history_entity_typeFieldUpdateOperationsInput | $Enums.db_history_entity_type
    entity_id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
  }

  export type db_historyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: Enumdb_history_event_typeFieldUpdateOperationsInput | $Enums.db_history_event_type
    entity_type?: Enumdb_history_entity_typeFieldUpdateOperationsInput | $Enums.db_history_entity_type
    entity_id?: StringFieldUpdateOperationsInput | string
    snapshot?: JsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Transfer_transactionListRelationFilter = {
    every?: transfer_transactionWhereInput
    some?: transfer_transactionWhereInput
    none?: transfer_transactionWhereInput
  }

  export type Income_transactionListRelationFilter = {
    every?: income_transactionWhereInput
    some?: income_transactionWhereInput
    none?: income_transactionWhereInput
  }

  export type Expense_transactionListRelationFilter = {
    every?: expense_transactionWhereInput
    some?: expense_transactionWhereInput
    none?: expense_transactionWhereInput
  }

  export type Investment_transactionListRelationFilter = {
    every?: investment_transactionWhereInput
    some?: investment_transactionWhereInput
    none?: investment_transactionWhereInput
  }

  export type Redemption_transactionListRelationFilter = {
    every?: redemption_transactionWhereInput
    some?: redemption_transactionWhereInput
    none?: redemption_transactionWhereInput
  }

  export type transfer_transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type income_transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type expense_transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type investment_transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type redemption_transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountNameGroupCompoundUniqueInput = {
    name: string
    group: string
  }

  export type accountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
  }

  export type accountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
  }

  export type accountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type income_sourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
  }

  export type income_sourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
  }

  export type income_sourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
  }

  export type expense_itemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
  }

  export type expense_itemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
  }

  export type expense_itemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
  }

  export type Units_lotListRelationFilter = {
    every?: units_lotWhereInput
    some?: units_lotWhereInput
    none?: units_lotWhereInput
  }

  export type units_lotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mutual_fundCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isin?: SortOrder
  }

  export type mutual_fundMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isin?: SortOrder
  }

  export type mutual_fundMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isin?: SortOrder
  }

  export type Investment_transactionNullableScalarRelationFilter = {
    is?: investment_transactionWhereInput | null
    isNot?: investment_transactionWhereInput | null
  }

  export type Redemption_bucketListRelationFilter = {
    every?: redemption_bucketWhereInput
    some?: redemption_bucketWhereInput
    none?: redemption_bucketWhereInput
  }

  export type Mutual_fundScalarRelationFilter = {
    is?: mutual_fundWhereInput
    isNot?: mutual_fundWhereInput
  }

  export type redemption_bucketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type units_lotCountOrderByAggregateInput = {
    id?: SortOrder
    mutual_fund_id?: SortOrder
  }

  export type units_lotMaxOrderByAggregateInput = {
    id?: SortOrder
    mutual_fund_id?: SortOrder
  }

  export type units_lotMinOrderByAggregateInput = {
    id?: SortOrder
    mutual_fund_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransactionScalarRelationFilter = {
    is?: transactionWhereInput
    isNot?: transactionWhereInput
  }

  export type AccountScalarRelationFilter = {
    is?: accountWhereInput
    isNot?: accountWhereInput
  }

  export type Units_lotScalarRelationFilter = {
    is?: units_lotWhereInput
    isNot?: units_lotWhereInput
  }

  export type investment_transactionCountOrderByAggregateInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    units_bought?: SortOrder
    buy_nav?: SortOrder
    allotment_date?: SortOrder
    units_lot_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type investment_transactionAvgOrderByAggregateInput = {
    units_bought?: SortOrder
    buy_nav?: SortOrder
  }

  export type investment_transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    units_bought?: SortOrder
    buy_nav?: SortOrder
    allotment_date?: SortOrder
    units_lot_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type investment_transactionMinOrderByAggregateInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    units_bought?: SortOrder
    buy_nav?: SortOrder
    allotment_date?: SortOrder
    units_lot_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type investment_transactionSumOrderByAggregateInput = {
    units_bought?: SortOrder
    buy_nav?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type redemption_transactionCountOrderByAggregateInput = {
    id?: SortOrder
    to_account_id?: SortOrder
    sell_nav?: SortOrder
    redemption_date?: SortOrder
    transaction_id?: SortOrder
  }

  export type redemption_transactionAvgOrderByAggregateInput = {
    sell_nav?: SortOrder
  }

  export type redemption_transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    to_account_id?: SortOrder
    sell_nav?: SortOrder
    redemption_date?: SortOrder
    transaction_id?: SortOrder
  }

  export type redemption_transactionMinOrderByAggregateInput = {
    id?: SortOrder
    to_account_id?: SortOrder
    sell_nav?: SortOrder
    redemption_date?: SortOrder
    transaction_id?: SortOrder
  }

  export type redemption_transactionSumOrderByAggregateInput = {
    sell_nav?: SortOrder
  }

  export type Redemption_transactionScalarRelationFilter = {
    is?: redemption_transactionWhereInput
    isNot?: redemption_transactionWhereInput
  }

  export type redemption_bucketCountOrderByAggregateInput = {
    id?: SortOrder
    redemption_transaction_id?: SortOrder
    units_lot_id?: SortOrder
    units_redeemed?: SortOrder
  }

  export type redemption_bucketAvgOrderByAggregateInput = {
    units_redeemed?: SortOrder
  }

  export type redemption_bucketMaxOrderByAggregateInput = {
    id?: SortOrder
    redemption_transaction_id?: SortOrder
    units_lot_id?: SortOrder
    units_redeemed?: SortOrder
  }

  export type redemption_bucketMinOrderByAggregateInput = {
    id?: SortOrder
    redemption_transaction_id?: SortOrder
    units_lot_id?: SortOrder
    units_redeemed?: SortOrder
  }

  export type redemption_bucketSumOrderByAggregateInput = {
    units_redeemed?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumtransaction_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type | Enumtransaction_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type[]
    notIn?: $Enums.transaction_type[]
    not?: NestedEnumtransaction_typeFilter<$PrismaModel> | $Enums.transaction_type
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Transfer_transactionNullableScalarRelationFilter = {
    is?: transfer_transactionWhereInput | null
    isNot?: transfer_transactionWhereInput | null
  }

  export type Expense_transactionNullableScalarRelationFilter = {
    is?: expense_transactionWhereInput | null
    isNot?: expense_transactionWhereInput | null
  }

  export type Income_transactionNullableScalarRelationFilter = {
    is?: income_transactionWhereInput | null
    isNot?: income_transactionWhereInput | null
  }

  export type Redemption_transactionNullableScalarRelationFilter = {
    is?: redemption_transactionWhereInput | null
    isNot?: redemption_transactionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    date?: SortOrder
    time?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    note?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    date?: SortOrder
    time?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    note?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    date?: SortOrder
    time?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    note?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumtransaction_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type | Enumtransaction_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type[]
    notIn?: $Enums.transaction_type[]
    not?: NestedEnumtransaction_typeWithAggregatesFilter<$PrismaModel> | $Enums.transaction_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaction_typeFilter<$PrismaModel>
    _max?: NestedEnumtransaction_typeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type transfer_transactionCountOrderByAggregateInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    to_account_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type transfer_transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    to_account_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type transfer_transactionMinOrderByAggregateInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    to_account_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type Expense_itemScalarRelationFilter = {
    is?: expense_itemWhereInput
    isNot?: expense_itemWhereInput
  }

  export type expense_transactionCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    expense_item_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type expense_transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    expense_item_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type expense_transactionMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    expense_item_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type Income_sourceScalarRelationFilter = {
    is?: income_sourceWhereInput
    isNot?: income_sourceWhereInput
  }

  export type income_transactionCountOrderByAggregateInput = {
    id?: SortOrder
    income_source_id?: SortOrder
    account_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type income_transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    income_source_id?: SortOrder
    account_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type income_transactionMinOrderByAggregateInput = {
    id?: SortOrder
    income_source_id?: SortOrder
    account_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type Enumdb_history_event_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.db_history_event_type | Enumdb_history_event_typeFieldRefInput<$PrismaModel>
    in?: $Enums.db_history_event_type[]
    notIn?: $Enums.db_history_event_type[]
    not?: NestedEnumdb_history_event_typeFilter<$PrismaModel> | $Enums.db_history_event_type
  }

  export type Enumdb_history_entity_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.db_history_entity_type | Enumdb_history_entity_typeFieldRefInput<$PrismaModel>
    in?: $Enums.db_history_entity_type[]
    notIn?: $Enums.db_history_entity_type[]
    not?: NestedEnumdb_history_entity_typeFilter<$PrismaModel> | $Enums.db_history_entity_type
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type db_historyCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    event_type?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    snapshot?: SortOrder
  }

  export type db_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    event_type?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
  }

  export type db_historyMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    event_type?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
  }

  export type Enumdb_history_event_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.db_history_event_type | Enumdb_history_event_typeFieldRefInput<$PrismaModel>
    in?: $Enums.db_history_event_type[]
    notIn?: $Enums.db_history_event_type[]
    not?: NestedEnumdb_history_event_typeWithAggregatesFilter<$PrismaModel> | $Enums.db_history_event_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdb_history_event_typeFilter<$PrismaModel>
    _max?: NestedEnumdb_history_event_typeFilter<$PrismaModel>
  }

  export type Enumdb_history_entity_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.db_history_entity_type | Enumdb_history_entity_typeFieldRefInput<$PrismaModel>
    in?: $Enums.db_history_entity_type[]
    notIn?: $Enums.db_history_entity_type[]
    not?: NestedEnumdb_history_entity_typeWithAggregatesFilter<$PrismaModel> | $Enums.db_history_entity_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdb_history_entity_typeFilter<$PrismaModel>
    _max?: NestedEnumdb_history_entity_typeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type transfer_transactionCreateNestedManyWithoutFrom_accountInput = {
    create?: XOR<transfer_transactionCreateWithoutFrom_accountInput, transfer_transactionUncheckedCreateWithoutFrom_accountInput> | transfer_transactionCreateWithoutFrom_accountInput[] | transfer_transactionUncheckedCreateWithoutFrom_accountInput[]
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutFrom_accountInput | transfer_transactionCreateOrConnectWithoutFrom_accountInput[]
    createMany?: transfer_transactionCreateManyFrom_accountInputEnvelope
    connect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
  }

  export type transfer_transactionCreateNestedManyWithoutTo_accountInput = {
    create?: XOR<transfer_transactionCreateWithoutTo_accountInput, transfer_transactionUncheckedCreateWithoutTo_accountInput> | transfer_transactionCreateWithoutTo_accountInput[] | transfer_transactionUncheckedCreateWithoutTo_accountInput[]
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutTo_accountInput | transfer_transactionCreateOrConnectWithoutTo_accountInput[]
    createMany?: transfer_transactionCreateManyTo_accountInputEnvelope
    connect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
  }

  export type income_transactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<income_transactionCreateWithoutAccountInput, income_transactionUncheckedCreateWithoutAccountInput> | income_transactionCreateWithoutAccountInput[] | income_transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: income_transactionCreateOrConnectWithoutAccountInput | income_transactionCreateOrConnectWithoutAccountInput[]
    createMany?: income_transactionCreateManyAccountInputEnvelope
    connect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
  }

  export type expense_transactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<expense_transactionCreateWithoutAccountInput, expense_transactionUncheckedCreateWithoutAccountInput> | expense_transactionCreateWithoutAccountInput[] | expense_transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: expense_transactionCreateOrConnectWithoutAccountInput | expense_transactionCreateOrConnectWithoutAccountInput[]
    createMany?: expense_transactionCreateManyAccountInputEnvelope
    connect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
  }

  export type investment_transactionCreateNestedManyWithoutFrom_accountInput = {
    create?: XOR<investment_transactionCreateWithoutFrom_accountInput, investment_transactionUncheckedCreateWithoutFrom_accountInput> | investment_transactionCreateWithoutFrom_accountInput[] | investment_transactionUncheckedCreateWithoutFrom_accountInput[]
    connectOrCreate?: investment_transactionCreateOrConnectWithoutFrom_accountInput | investment_transactionCreateOrConnectWithoutFrom_accountInput[]
    createMany?: investment_transactionCreateManyFrom_accountInputEnvelope
    connect?: investment_transactionWhereUniqueInput | investment_transactionWhereUniqueInput[]
  }

  export type redemption_transactionCreateNestedManyWithoutTo_accountInput = {
    create?: XOR<redemption_transactionCreateWithoutTo_accountInput, redemption_transactionUncheckedCreateWithoutTo_accountInput> | redemption_transactionCreateWithoutTo_accountInput[] | redemption_transactionUncheckedCreateWithoutTo_accountInput[]
    connectOrCreate?: redemption_transactionCreateOrConnectWithoutTo_accountInput | redemption_transactionCreateOrConnectWithoutTo_accountInput[]
    createMany?: redemption_transactionCreateManyTo_accountInputEnvelope
    connect?: redemption_transactionWhereUniqueInput | redemption_transactionWhereUniqueInput[]
  }

  export type transfer_transactionUncheckedCreateNestedManyWithoutFrom_accountInput = {
    create?: XOR<transfer_transactionCreateWithoutFrom_accountInput, transfer_transactionUncheckedCreateWithoutFrom_accountInput> | transfer_transactionCreateWithoutFrom_accountInput[] | transfer_transactionUncheckedCreateWithoutFrom_accountInput[]
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutFrom_accountInput | transfer_transactionCreateOrConnectWithoutFrom_accountInput[]
    createMany?: transfer_transactionCreateManyFrom_accountInputEnvelope
    connect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
  }

  export type transfer_transactionUncheckedCreateNestedManyWithoutTo_accountInput = {
    create?: XOR<transfer_transactionCreateWithoutTo_accountInput, transfer_transactionUncheckedCreateWithoutTo_accountInput> | transfer_transactionCreateWithoutTo_accountInput[] | transfer_transactionUncheckedCreateWithoutTo_accountInput[]
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutTo_accountInput | transfer_transactionCreateOrConnectWithoutTo_accountInput[]
    createMany?: transfer_transactionCreateManyTo_accountInputEnvelope
    connect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
  }

  export type income_transactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<income_transactionCreateWithoutAccountInput, income_transactionUncheckedCreateWithoutAccountInput> | income_transactionCreateWithoutAccountInput[] | income_transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: income_transactionCreateOrConnectWithoutAccountInput | income_transactionCreateOrConnectWithoutAccountInput[]
    createMany?: income_transactionCreateManyAccountInputEnvelope
    connect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
  }

  export type expense_transactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<expense_transactionCreateWithoutAccountInput, expense_transactionUncheckedCreateWithoutAccountInput> | expense_transactionCreateWithoutAccountInput[] | expense_transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: expense_transactionCreateOrConnectWithoutAccountInput | expense_transactionCreateOrConnectWithoutAccountInput[]
    createMany?: expense_transactionCreateManyAccountInputEnvelope
    connect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
  }

  export type investment_transactionUncheckedCreateNestedManyWithoutFrom_accountInput = {
    create?: XOR<investment_transactionCreateWithoutFrom_accountInput, investment_transactionUncheckedCreateWithoutFrom_accountInput> | investment_transactionCreateWithoutFrom_accountInput[] | investment_transactionUncheckedCreateWithoutFrom_accountInput[]
    connectOrCreate?: investment_transactionCreateOrConnectWithoutFrom_accountInput | investment_transactionCreateOrConnectWithoutFrom_accountInput[]
    createMany?: investment_transactionCreateManyFrom_accountInputEnvelope
    connect?: investment_transactionWhereUniqueInput | investment_transactionWhereUniqueInput[]
  }

  export type redemption_transactionUncheckedCreateNestedManyWithoutTo_accountInput = {
    create?: XOR<redemption_transactionCreateWithoutTo_accountInput, redemption_transactionUncheckedCreateWithoutTo_accountInput> | redemption_transactionCreateWithoutTo_accountInput[] | redemption_transactionUncheckedCreateWithoutTo_accountInput[]
    connectOrCreate?: redemption_transactionCreateOrConnectWithoutTo_accountInput | redemption_transactionCreateOrConnectWithoutTo_accountInput[]
    createMany?: redemption_transactionCreateManyTo_accountInputEnvelope
    connect?: redemption_transactionWhereUniqueInput | redemption_transactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type transfer_transactionUpdateManyWithoutFrom_accountNestedInput = {
    create?: XOR<transfer_transactionCreateWithoutFrom_accountInput, transfer_transactionUncheckedCreateWithoutFrom_accountInput> | transfer_transactionCreateWithoutFrom_accountInput[] | transfer_transactionUncheckedCreateWithoutFrom_accountInput[]
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutFrom_accountInput | transfer_transactionCreateOrConnectWithoutFrom_accountInput[]
    upsert?: transfer_transactionUpsertWithWhereUniqueWithoutFrom_accountInput | transfer_transactionUpsertWithWhereUniqueWithoutFrom_accountInput[]
    createMany?: transfer_transactionCreateManyFrom_accountInputEnvelope
    set?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    disconnect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    delete?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    connect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    update?: transfer_transactionUpdateWithWhereUniqueWithoutFrom_accountInput | transfer_transactionUpdateWithWhereUniqueWithoutFrom_accountInput[]
    updateMany?: transfer_transactionUpdateManyWithWhereWithoutFrom_accountInput | transfer_transactionUpdateManyWithWhereWithoutFrom_accountInput[]
    deleteMany?: transfer_transactionScalarWhereInput | transfer_transactionScalarWhereInput[]
  }

  export type transfer_transactionUpdateManyWithoutTo_accountNestedInput = {
    create?: XOR<transfer_transactionCreateWithoutTo_accountInput, transfer_transactionUncheckedCreateWithoutTo_accountInput> | transfer_transactionCreateWithoutTo_accountInput[] | transfer_transactionUncheckedCreateWithoutTo_accountInput[]
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutTo_accountInput | transfer_transactionCreateOrConnectWithoutTo_accountInput[]
    upsert?: transfer_transactionUpsertWithWhereUniqueWithoutTo_accountInput | transfer_transactionUpsertWithWhereUniqueWithoutTo_accountInput[]
    createMany?: transfer_transactionCreateManyTo_accountInputEnvelope
    set?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    disconnect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    delete?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    connect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    update?: transfer_transactionUpdateWithWhereUniqueWithoutTo_accountInput | transfer_transactionUpdateWithWhereUniqueWithoutTo_accountInput[]
    updateMany?: transfer_transactionUpdateManyWithWhereWithoutTo_accountInput | transfer_transactionUpdateManyWithWhereWithoutTo_accountInput[]
    deleteMany?: transfer_transactionScalarWhereInput | transfer_transactionScalarWhereInput[]
  }

  export type income_transactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<income_transactionCreateWithoutAccountInput, income_transactionUncheckedCreateWithoutAccountInput> | income_transactionCreateWithoutAccountInput[] | income_transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: income_transactionCreateOrConnectWithoutAccountInput | income_transactionCreateOrConnectWithoutAccountInput[]
    upsert?: income_transactionUpsertWithWhereUniqueWithoutAccountInput | income_transactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: income_transactionCreateManyAccountInputEnvelope
    set?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    disconnect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    delete?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    connect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    update?: income_transactionUpdateWithWhereUniqueWithoutAccountInput | income_transactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: income_transactionUpdateManyWithWhereWithoutAccountInput | income_transactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: income_transactionScalarWhereInput | income_transactionScalarWhereInput[]
  }

  export type expense_transactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<expense_transactionCreateWithoutAccountInput, expense_transactionUncheckedCreateWithoutAccountInput> | expense_transactionCreateWithoutAccountInput[] | expense_transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: expense_transactionCreateOrConnectWithoutAccountInput | expense_transactionCreateOrConnectWithoutAccountInput[]
    upsert?: expense_transactionUpsertWithWhereUniqueWithoutAccountInput | expense_transactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: expense_transactionCreateManyAccountInputEnvelope
    set?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    disconnect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    delete?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    connect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    update?: expense_transactionUpdateWithWhereUniqueWithoutAccountInput | expense_transactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: expense_transactionUpdateManyWithWhereWithoutAccountInput | expense_transactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: expense_transactionScalarWhereInput | expense_transactionScalarWhereInput[]
  }

  export type investment_transactionUpdateManyWithoutFrom_accountNestedInput = {
    create?: XOR<investment_transactionCreateWithoutFrom_accountInput, investment_transactionUncheckedCreateWithoutFrom_accountInput> | investment_transactionCreateWithoutFrom_accountInput[] | investment_transactionUncheckedCreateWithoutFrom_accountInput[]
    connectOrCreate?: investment_transactionCreateOrConnectWithoutFrom_accountInput | investment_transactionCreateOrConnectWithoutFrom_accountInput[]
    upsert?: investment_transactionUpsertWithWhereUniqueWithoutFrom_accountInput | investment_transactionUpsertWithWhereUniqueWithoutFrom_accountInput[]
    createMany?: investment_transactionCreateManyFrom_accountInputEnvelope
    set?: investment_transactionWhereUniqueInput | investment_transactionWhereUniqueInput[]
    disconnect?: investment_transactionWhereUniqueInput | investment_transactionWhereUniqueInput[]
    delete?: investment_transactionWhereUniqueInput | investment_transactionWhereUniqueInput[]
    connect?: investment_transactionWhereUniqueInput | investment_transactionWhereUniqueInput[]
    update?: investment_transactionUpdateWithWhereUniqueWithoutFrom_accountInput | investment_transactionUpdateWithWhereUniqueWithoutFrom_accountInput[]
    updateMany?: investment_transactionUpdateManyWithWhereWithoutFrom_accountInput | investment_transactionUpdateManyWithWhereWithoutFrom_accountInput[]
    deleteMany?: investment_transactionScalarWhereInput | investment_transactionScalarWhereInput[]
  }

  export type redemption_transactionUpdateManyWithoutTo_accountNestedInput = {
    create?: XOR<redemption_transactionCreateWithoutTo_accountInput, redemption_transactionUncheckedCreateWithoutTo_accountInput> | redemption_transactionCreateWithoutTo_accountInput[] | redemption_transactionUncheckedCreateWithoutTo_accountInput[]
    connectOrCreate?: redemption_transactionCreateOrConnectWithoutTo_accountInput | redemption_transactionCreateOrConnectWithoutTo_accountInput[]
    upsert?: redemption_transactionUpsertWithWhereUniqueWithoutTo_accountInput | redemption_transactionUpsertWithWhereUniqueWithoutTo_accountInput[]
    createMany?: redemption_transactionCreateManyTo_accountInputEnvelope
    set?: redemption_transactionWhereUniqueInput | redemption_transactionWhereUniqueInput[]
    disconnect?: redemption_transactionWhereUniqueInput | redemption_transactionWhereUniqueInput[]
    delete?: redemption_transactionWhereUniqueInput | redemption_transactionWhereUniqueInput[]
    connect?: redemption_transactionWhereUniqueInput | redemption_transactionWhereUniqueInput[]
    update?: redemption_transactionUpdateWithWhereUniqueWithoutTo_accountInput | redemption_transactionUpdateWithWhereUniqueWithoutTo_accountInput[]
    updateMany?: redemption_transactionUpdateManyWithWhereWithoutTo_accountInput | redemption_transactionUpdateManyWithWhereWithoutTo_accountInput[]
    deleteMany?: redemption_transactionScalarWhereInput | redemption_transactionScalarWhereInput[]
  }

  export type transfer_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput = {
    create?: XOR<transfer_transactionCreateWithoutFrom_accountInput, transfer_transactionUncheckedCreateWithoutFrom_accountInput> | transfer_transactionCreateWithoutFrom_accountInput[] | transfer_transactionUncheckedCreateWithoutFrom_accountInput[]
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutFrom_accountInput | transfer_transactionCreateOrConnectWithoutFrom_accountInput[]
    upsert?: transfer_transactionUpsertWithWhereUniqueWithoutFrom_accountInput | transfer_transactionUpsertWithWhereUniqueWithoutFrom_accountInput[]
    createMany?: transfer_transactionCreateManyFrom_accountInputEnvelope
    set?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    disconnect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    delete?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    connect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    update?: transfer_transactionUpdateWithWhereUniqueWithoutFrom_accountInput | transfer_transactionUpdateWithWhereUniqueWithoutFrom_accountInput[]
    updateMany?: transfer_transactionUpdateManyWithWhereWithoutFrom_accountInput | transfer_transactionUpdateManyWithWhereWithoutFrom_accountInput[]
    deleteMany?: transfer_transactionScalarWhereInput | transfer_transactionScalarWhereInput[]
  }

  export type transfer_transactionUncheckedUpdateManyWithoutTo_accountNestedInput = {
    create?: XOR<transfer_transactionCreateWithoutTo_accountInput, transfer_transactionUncheckedCreateWithoutTo_accountInput> | transfer_transactionCreateWithoutTo_accountInput[] | transfer_transactionUncheckedCreateWithoutTo_accountInput[]
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutTo_accountInput | transfer_transactionCreateOrConnectWithoutTo_accountInput[]
    upsert?: transfer_transactionUpsertWithWhereUniqueWithoutTo_accountInput | transfer_transactionUpsertWithWhereUniqueWithoutTo_accountInput[]
    createMany?: transfer_transactionCreateManyTo_accountInputEnvelope
    set?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    disconnect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    delete?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    connect?: transfer_transactionWhereUniqueInput | transfer_transactionWhereUniqueInput[]
    update?: transfer_transactionUpdateWithWhereUniqueWithoutTo_accountInput | transfer_transactionUpdateWithWhereUniqueWithoutTo_accountInput[]
    updateMany?: transfer_transactionUpdateManyWithWhereWithoutTo_accountInput | transfer_transactionUpdateManyWithWhereWithoutTo_accountInput[]
    deleteMany?: transfer_transactionScalarWhereInput | transfer_transactionScalarWhereInput[]
  }

  export type income_transactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<income_transactionCreateWithoutAccountInput, income_transactionUncheckedCreateWithoutAccountInput> | income_transactionCreateWithoutAccountInput[] | income_transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: income_transactionCreateOrConnectWithoutAccountInput | income_transactionCreateOrConnectWithoutAccountInput[]
    upsert?: income_transactionUpsertWithWhereUniqueWithoutAccountInput | income_transactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: income_transactionCreateManyAccountInputEnvelope
    set?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    disconnect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    delete?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    connect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    update?: income_transactionUpdateWithWhereUniqueWithoutAccountInput | income_transactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: income_transactionUpdateManyWithWhereWithoutAccountInput | income_transactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: income_transactionScalarWhereInput | income_transactionScalarWhereInput[]
  }

  export type expense_transactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<expense_transactionCreateWithoutAccountInput, expense_transactionUncheckedCreateWithoutAccountInput> | expense_transactionCreateWithoutAccountInput[] | expense_transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: expense_transactionCreateOrConnectWithoutAccountInput | expense_transactionCreateOrConnectWithoutAccountInput[]
    upsert?: expense_transactionUpsertWithWhereUniqueWithoutAccountInput | expense_transactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: expense_transactionCreateManyAccountInputEnvelope
    set?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    disconnect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    delete?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    connect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    update?: expense_transactionUpdateWithWhereUniqueWithoutAccountInput | expense_transactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: expense_transactionUpdateManyWithWhereWithoutAccountInput | expense_transactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: expense_transactionScalarWhereInput | expense_transactionScalarWhereInput[]
  }

  export type investment_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput = {
    create?: XOR<investment_transactionCreateWithoutFrom_accountInput, investment_transactionUncheckedCreateWithoutFrom_accountInput> | investment_transactionCreateWithoutFrom_accountInput[] | investment_transactionUncheckedCreateWithoutFrom_accountInput[]
    connectOrCreate?: investment_transactionCreateOrConnectWithoutFrom_accountInput | investment_transactionCreateOrConnectWithoutFrom_accountInput[]
    upsert?: investment_transactionUpsertWithWhereUniqueWithoutFrom_accountInput | investment_transactionUpsertWithWhereUniqueWithoutFrom_accountInput[]
    createMany?: investment_transactionCreateManyFrom_accountInputEnvelope
    set?: investment_transactionWhereUniqueInput | investment_transactionWhereUniqueInput[]
    disconnect?: investment_transactionWhereUniqueInput | investment_transactionWhereUniqueInput[]
    delete?: investment_transactionWhereUniqueInput | investment_transactionWhereUniqueInput[]
    connect?: investment_transactionWhereUniqueInput | investment_transactionWhereUniqueInput[]
    update?: investment_transactionUpdateWithWhereUniqueWithoutFrom_accountInput | investment_transactionUpdateWithWhereUniqueWithoutFrom_accountInput[]
    updateMany?: investment_transactionUpdateManyWithWhereWithoutFrom_accountInput | investment_transactionUpdateManyWithWhereWithoutFrom_accountInput[]
    deleteMany?: investment_transactionScalarWhereInput | investment_transactionScalarWhereInput[]
  }

  export type redemption_transactionUncheckedUpdateManyWithoutTo_accountNestedInput = {
    create?: XOR<redemption_transactionCreateWithoutTo_accountInput, redemption_transactionUncheckedCreateWithoutTo_accountInput> | redemption_transactionCreateWithoutTo_accountInput[] | redemption_transactionUncheckedCreateWithoutTo_accountInput[]
    connectOrCreate?: redemption_transactionCreateOrConnectWithoutTo_accountInput | redemption_transactionCreateOrConnectWithoutTo_accountInput[]
    upsert?: redemption_transactionUpsertWithWhereUniqueWithoutTo_accountInput | redemption_transactionUpsertWithWhereUniqueWithoutTo_accountInput[]
    createMany?: redemption_transactionCreateManyTo_accountInputEnvelope
    set?: redemption_transactionWhereUniqueInput | redemption_transactionWhereUniqueInput[]
    disconnect?: redemption_transactionWhereUniqueInput | redemption_transactionWhereUniqueInput[]
    delete?: redemption_transactionWhereUniqueInput | redemption_transactionWhereUniqueInput[]
    connect?: redemption_transactionWhereUniqueInput | redemption_transactionWhereUniqueInput[]
    update?: redemption_transactionUpdateWithWhereUniqueWithoutTo_accountInput | redemption_transactionUpdateWithWhereUniqueWithoutTo_accountInput[]
    updateMany?: redemption_transactionUpdateManyWithWhereWithoutTo_accountInput | redemption_transactionUpdateManyWithWhereWithoutTo_accountInput[]
    deleteMany?: redemption_transactionScalarWhereInput | redemption_transactionScalarWhereInput[]
  }

  export type income_transactionCreateNestedManyWithoutIncome_sourceInput = {
    create?: XOR<income_transactionCreateWithoutIncome_sourceInput, income_transactionUncheckedCreateWithoutIncome_sourceInput> | income_transactionCreateWithoutIncome_sourceInput[] | income_transactionUncheckedCreateWithoutIncome_sourceInput[]
    connectOrCreate?: income_transactionCreateOrConnectWithoutIncome_sourceInput | income_transactionCreateOrConnectWithoutIncome_sourceInput[]
    createMany?: income_transactionCreateManyIncome_sourceInputEnvelope
    connect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
  }

  export type income_transactionUncheckedCreateNestedManyWithoutIncome_sourceInput = {
    create?: XOR<income_transactionCreateWithoutIncome_sourceInput, income_transactionUncheckedCreateWithoutIncome_sourceInput> | income_transactionCreateWithoutIncome_sourceInput[] | income_transactionUncheckedCreateWithoutIncome_sourceInput[]
    connectOrCreate?: income_transactionCreateOrConnectWithoutIncome_sourceInput | income_transactionCreateOrConnectWithoutIncome_sourceInput[]
    createMany?: income_transactionCreateManyIncome_sourceInputEnvelope
    connect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
  }

  export type income_transactionUpdateManyWithoutIncome_sourceNestedInput = {
    create?: XOR<income_transactionCreateWithoutIncome_sourceInput, income_transactionUncheckedCreateWithoutIncome_sourceInput> | income_transactionCreateWithoutIncome_sourceInput[] | income_transactionUncheckedCreateWithoutIncome_sourceInput[]
    connectOrCreate?: income_transactionCreateOrConnectWithoutIncome_sourceInput | income_transactionCreateOrConnectWithoutIncome_sourceInput[]
    upsert?: income_transactionUpsertWithWhereUniqueWithoutIncome_sourceInput | income_transactionUpsertWithWhereUniqueWithoutIncome_sourceInput[]
    createMany?: income_transactionCreateManyIncome_sourceInputEnvelope
    set?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    disconnect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    delete?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    connect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    update?: income_transactionUpdateWithWhereUniqueWithoutIncome_sourceInput | income_transactionUpdateWithWhereUniqueWithoutIncome_sourceInput[]
    updateMany?: income_transactionUpdateManyWithWhereWithoutIncome_sourceInput | income_transactionUpdateManyWithWhereWithoutIncome_sourceInput[]
    deleteMany?: income_transactionScalarWhereInput | income_transactionScalarWhereInput[]
  }

  export type income_transactionUncheckedUpdateManyWithoutIncome_sourceNestedInput = {
    create?: XOR<income_transactionCreateWithoutIncome_sourceInput, income_transactionUncheckedCreateWithoutIncome_sourceInput> | income_transactionCreateWithoutIncome_sourceInput[] | income_transactionUncheckedCreateWithoutIncome_sourceInput[]
    connectOrCreate?: income_transactionCreateOrConnectWithoutIncome_sourceInput | income_transactionCreateOrConnectWithoutIncome_sourceInput[]
    upsert?: income_transactionUpsertWithWhereUniqueWithoutIncome_sourceInput | income_transactionUpsertWithWhereUniqueWithoutIncome_sourceInput[]
    createMany?: income_transactionCreateManyIncome_sourceInputEnvelope
    set?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    disconnect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    delete?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    connect?: income_transactionWhereUniqueInput | income_transactionWhereUniqueInput[]
    update?: income_transactionUpdateWithWhereUniqueWithoutIncome_sourceInput | income_transactionUpdateWithWhereUniqueWithoutIncome_sourceInput[]
    updateMany?: income_transactionUpdateManyWithWhereWithoutIncome_sourceInput | income_transactionUpdateManyWithWhereWithoutIncome_sourceInput[]
    deleteMany?: income_transactionScalarWhereInput | income_transactionScalarWhereInput[]
  }

  export type expense_transactionCreateNestedManyWithoutExpense_itemInput = {
    create?: XOR<expense_transactionCreateWithoutExpense_itemInput, expense_transactionUncheckedCreateWithoutExpense_itemInput> | expense_transactionCreateWithoutExpense_itemInput[] | expense_transactionUncheckedCreateWithoutExpense_itemInput[]
    connectOrCreate?: expense_transactionCreateOrConnectWithoutExpense_itemInput | expense_transactionCreateOrConnectWithoutExpense_itemInput[]
    createMany?: expense_transactionCreateManyExpense_itemInputEnvelope
    connect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
  }

  export type expense_transactionUncheckedCreateNestedManyWithoutExpense_itemInput = {
    create?: XOR<expense_transactionCreateWithoutExpense_itemInput, expense_transactionUncheckedCreateWithoutExpense_itemInput> | expense_transactionCreateWithoutExpense_itemInput[] | expense_transactionUncheckedCreateWithoutExpense_itemInput[]
    connectOrCreate?: expense_transactionCreateOrConnectWithoutExpense_itemInput | expense_transactionCreateOrConnectWithoutExpense_itemInput[]
    createMany?: expense_transactionCreateManyExpense_itemInputEnvelope
    connect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
  }

  export type expense_transactionUpdateManyWithoutExpense_itemNestedInput = {
    create?: XOR<expense_transactionCreateWithoutExpense_itemInput, expense_transactionUncheckedCreateWithoutExpense_itemInput> | expense_transactionCreateWithoutExpense_itemInput[] | expense_transactionUncheckedCreateWithoutExpense_itemInput[]
    connectOrCreate?: expense_transactionCreateOrConnectWithoutExpense_itemInput | expense_transactionCreateOrConnectWithoutExpense_itemInput[]
    upsert?: expense_transactionUpsertWithWhereUniqueWithoutExpense_itemInput | expense_transactionUpsertWithWhereUniqueWithoutExpense_itemInput[]
    createMany?: expense_transactionCreateManyExpense_itemInputEnvelope
    set?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    disconnect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    delete?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    connect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    update?: expense_transactionUpdateWithWhereUniqueWithoutExpense_itemInput | expense_transactionUpdateWithWhereUniqueWithoutExpense_itemInput[]
    updateMany?: expense_transactionUpdateManyWithWhereWithoutExpense_itemInput | expense_transactionUpdateManyWithWhereWithoutExpense_itemInput[]
    deleteMany?: expense_transactionScalarWhereInput | expense_transactionScalarWhereInput[]
  }

  export type expense_transactionUncheckedUpdateManyWithoutExpense_itemNestedInput = {
    create?: XOR<expense_transactionCreateWithoutExpense_itemInput, expense_transactionUncheckedCreateWithoutExpense_itemInput> | expense_transactionCreateWithoutExpense_itemInput[] | expense_transactionUncheckedCreateWithoutExpense_itemInput[]
    connectOrCreate?: expense_transactionCreateOrConnectWithoutExpense_itemInput | expense_transactionCreateOrConnectWithoutExpense_itemInput[]
    upsert?: expense_transactionUpsertWithWhereUniqueWithoutExpense_itemInput | expense_transactionUpsertWithWhereUniqueWithoutExpense_itemInput[]
    createMany?: expense_transactionCreateManyExpense_itemInputEnvelope
    set?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    disconnect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    delete?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    connect?: expense_transactionWhereUniqueInput | expense_transactionWhereUniqueInput[]
    update?: expense_transactionUpdateWithWhereUniqueWithoutExpense_itemInput | expense_transactionUpdateWithWhereUniqueWithoutExpense_itemInput[]
    updateMany?: expense_transactionUpdateManyWithWhereWithoutExpense_itemInput | expense_transactionUpdateManyWithWhereWithoutExpense_itemInput[]
    deleteMany?: expense_transactionScalarWhereInput | expense_transactionScalarWhereInput[]
  }

  export type units_lotCreateNestedManyWithoutMutual_fundInput = {
    create?: XOR<units_lotCreateWithoutMutual_fundInput, units_lotUncheckedCreateWithoutMutual_fundInput> | units_lotCreateWithoutMutual_fundInput[] | units_lotUncheckedCreateWithoutMutual_fundInput[]
    connectOrCreate?: units_lotCreateOrConnectWithoutMutual_fundInput | units_lotCreateOrConnectWithoutMutual_fundInput[]
    createMany?: units_lotCreateManyMutual_fundInputEnvelope
    connect?: units_lotWhereUniqueInput | units_lotWhereUniqueInput[]
  }

  export type units_lotUncheckedCreateNestedManyWithoutMutual_fundInput = {
    create?: XOR<units_lotCreateWithoutMutual_fundInput, units_lotUncheckedCreateWithoutMutual_fundInput> | units_lotCreateWithoutMutual_fundInput[] | units_lotUncheckedCreateWithoutMutual_fundInput[]
    connectOrCreate?: units_lotCreateOrConnectWithoutMutual_fundInput | units_lotCreateOrConnectWithoutMutual_fundInput[]
    createMany?: units_lotCreateManyMutual_fundInputEnvelope
    connect?: units_lotWhereUniqueInput | units_lotWhereUniqueInput[]
  }

  export type units_lotUpdateManyWithoutMutual_fundNestedInput = {
    create?: XOR<units_lotCreateWithoutMutual_fundInput, units_lotUncheckedCreateWithoutMutual_fundInput> | units_lotCreateWithoutMutual_fundInput[] | units_lotUncheckedCreateWithoutMutual_fundInput[]
    connectOrCreate?: units_lotCreateOrConnectWithoutMutual_fundInput | units_lotCreateOrConnectWithoutMutual_fundInput[]
    upsert?: units_lotUpsertWithWhereUniqueWithoutMutual_fundInput | units_lotUpsertWithWhereUniqueWithoutMutual_fundInput[]
    createMany?: units_lotCreateManyMutual_fundInputEnvelope
    set?: units_lotWhereUniqueInput | units_lotWhereUniqueInput[]
    disconnect?: units_lotWhereUniqueInput | units_lotWhereUniqueInput[]
    delete?: units_lotWhereUniqueInput | units_lotWhereUniqueInput[]
    connect?: units_lotWhereUniqueInput | units_lotWhereUniqueInput[]
    update?: units_lotUpdateWithWhereUniqueWithoutMutual_fundInput | units_lotUpdateWithWhereUniqueWithoutMutual_fundInput[]
    updateMany?: units_lotUpdateManyWithWhereWithoutMutual_fundInput | units_lotUpdateManyWithWhereWithoutMutual_fundInput[]
    deleteMany?: units_lotScalarWhereInput | units_lotScalarWhereInput[]
  }

  export type units_lotUncheckedUpdateManyWithoutMutual_fundNestedInput = {
    create?: XOR<units_lotCreateWithoutMutual_fundInput, units_lotUncheckedCreateWithoutMutual_fundInput> | units_lotCreateWithoutMutual_fundInput[] | units_lotUncheckedCreateWithoutMutual_fundInput[]
    connectOrCreate?: units_lotCreateOrConnectWithoutMutual_fundInput | units_lotCreateOrConnectWithoutMutual_fundInput[]
    upsert?: units_lotUpsertWithWhereUniqueWithoutMutual_fundInput | units_lotUpsertWithWhereUniqueWithoutMutual_fundInput[]
    createMany?: units_lotCreateManyMutual_fundInputEnvelope
    set?: units_lotWhereUniqueInput | units_lotWhereUniqueInput[]
    disconnect?: units_lotWhereUniqueInput | units_lotWhereUniqueInput[]
    delete?: units_lotWhereUniqueInput | units_lotWhereUniqueInput[]
    connect?: units_lotWhereUniqueInput | units_lotWhereUniqueInput[]
    update?: units_lotUpdateWithWhereUniqueWithoutMutual_fundInput | units_lotUpdateWithWhereUniqueWithoutMutual_fundInput[]
    updateMany?: units_lotUpdateManyWithWhereWithoutMutual_fundInput | units_lotUpdateManyWithWhereWithoutMutual_fundInput[]
    deleteMany?: units_lotScalarWhereInput | units_lotScalarWhereInput[]
  }

  export type investment_transactionCreateNestedOneWithoutUnits_lotInput = {
    create?: XOR<investment_transactionCreateWithoutUnits_lotInput, investment_transactionUncheckedCreateWithoutUnits_lotInput>
    connectOrCreate?: investment_transactionCreateOrConnectWithoutUnits_lotInput
    connect?: investment_transactionWhereUniqueInput
  }

  export type redemption_bucketCreateNestedManyWithoutUnits_lotInput = {
    create?: XOR<redemption_bucketCreateWithoutUnits_lotInput, redemption_bucketUncheckedCreateWithoutUnits_lotInput> | redemption_bucketCreateWithoutUnits_lotInput[] | redemption_bucketUncheckedCreateWithoutUnits_lotInput[]
    connectOrCreate?: redemption_bucketCreateOrConnectWithoutUnits_lotInput | redemption_bucketCreateOrConnectWithoutUnits_lotInput[]
    createMany?: redemption_bucketCreateManyUnits_lotInputEnvelope
    connect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
  }

  export type mutual_fundCreateNestedOneWithoutUnits_lotsInput = {
    create?: XOR<mutual_fundCreateWithoutUnits_lotsInput, mutual_fundUncheckedCreateWithoutUnits_lotsInput>
    connectOrCreate?: mutual_fundCreateOrConnectWithoutUnits_lotsInput
    connect?: mutual_fundWhereUniqueInput
  }

  export type investment_transactionUncheckedCreateNestedOneWithoutUnits_lotInput = {
    create?: XOR<investment_transactionCreateWithoutUnits_lotInput, investment_transactionUncheckedCreateWithoutUnits_lotInput>
    connectOrCreate?: investment_transactionCreateOrConnectWithoutUnits_lotInput
    connect?: investment_transactionWhereUniqueInput
  }

  export type redemption_bucketUncheckedCreateNestedManyWithoutUnits_lotInput = {
    create?: XOR<redemption_bucketCreateWithoutUnits_lotInput, redemption_bucketUncheckedCreateWithoutUnits_lotInput> | redemption_bucketCreateWithoutUnits_lotInput[] | redemption_bucketUncheckedCreateWithoutUnits_lotInput[]
    connectOrCreate?: redemption_bucketCreateOrConnectWithoutUnits_lotInput | redemption_bucketCreateOrConnectWithoutUnits_lotInput[]
    createMany?: redemption_bucketCreateManyUnits_lotInputEnvelope
    connect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
  }

  export type investment_transactionUpdateOneWithoutUnits_lotNestedInput = {
    create?: XOR<investment_transactionCreateWithoutUnits_lotInput, investment_transactionUncheckedCreateWithoutUnits_lotInput>
    connectOrCreate?: investment_transactionCreateOrConnectWithoutUnits_lotInput
    upsert?: investment_transactionUpsertWithoutUnits_lotInput
    disconnect?: investment_transactionWhereInput | boolean
    delete?: investment_transactionWhereInput | boolean
    connect?: investment_transactionWhereUniqueInput
    update?: XOR<XOR<investment_transactionUpdateToOneWithWhereWithoutUnits_lotInput, investment_transactionUpdateWithoutUnits_lotInput>, investment_transactionUncheckedUpdateWithoutUnits_lotInput>
  }

  export type redemption_bucketUpdateManyWithoutUnits_lotNestedInput = {
    create?: XOR<redemption_bucketCreateWithoutUnits_lotInput, redemption_bucketUncheckedCreateWithoutUnits_lotInput> | redemption_bucketCreateWithoutUnits_lotInput[] | redemption_bucketUncheckedCreateWithoutUnits_lotInput[]
    connectOrCreate?: redemption_bucketCreateOrConnectWithoutUnits_lotInput | redemption_bucketCreateOrConnectWithoutUnits_lotInput[]
    upsert?: redemption_bucketUpsertWithWhereUniqueWithoutUnits_lotInput | redemption_bucketUpsertWithWhereUniqueWithoutUnits_lotInput[]
    createMany?: redemption_bucketCreateManyUnits_lotInputEnvelope
    set?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    disconnect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    delete?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    connect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    update?: redemption_bucketUpdateWithWhereUniqueWithoutUnits_lotInput | redemption_bucketUpdateWithWhereUniqueWithoutUnits_lotInput[]
    updateMany?: redemption_bucketUpdateManyWithWhereWithoutUnits_lotInput | redemption_bucketUpdateManyWithWhereWithoutUnits_lotInput[]
    deleteMany?: redemption_bucketScalarWhereInput | redemption_bucketScalarWhereInput[]
  }

  export type mutual_fundUpdateOneRequiredWithoutUnits_lotsNestedInput = {
    create?: XOR<mutual_fundCreateWithoutUnits_lotsInput, mutual_fundUncheckedCreateWithoutUnits_lotsInput>
    connectOrCreate?: mutual_fundCreateOrConnectWithoutUnits_lotsInput
    upsert?: mutual_fundUpsertWithoutUnits_lotsInput
    connect?: mutual_fundWhereUniqueInput
    update?: XOR<XOR<mutual_fundUpdateToOneWithWhereWithoutUnits_lotsInput, mutual_fundUpdateWithoutUnits_lotsInput>, mutual_fundUncheckedUpdateWithoutUnits_lotsInput>
  }

  export type investment_transactionUncheckedUpdateOneWithoutUnits_lotNestedInput = {
    create?: XOR<investment_transactionCreateWithoutUnits_lotInput, investment_transactionUncheckedCreateWithoutUnits_lotInput>
    connectOrCreate?: investment_transactionCreateOrConnectWithoutUnits_lotInput
    upsert?: investment_transactionUpsertWithoutUnits_lotInput
    disconnect?: investment_transactionWhereInput | boolean
    delete?: investment_transactionWhereInput | boolean
    connect?: investment_transactionWhereUniqueInput
    update?: XOR<XOR<investment_transactionUpdateToOneWithWhereWithoutUnits_lotInput, investment_transactionUpdateWithoutUnits_lotInput>, investment_transactionUncheckedUpdateWithoutUnits_lotInput>
  }

  export type redemption_bucketUncheckedUpdateManyWithoutUnits_lotNestedInput = {
    create?: XOR<redemption_bucketCreateWithoutUnits_lotInput, redemption_bucketUncheckedCreateWithoutUnits_lotInput> | redemption_bucketCreateWithoutUnits_lotInput[] | redemption_bucketUncheckedCreateWithoutUnits_lotInput[]
    connectOrCreate?: redemption_bucketCreateOrConnectWithoutUnits_lotInput | redemption_bucketCreateOrConnectWithoutUnits_lotInput[]
    upsert?: redemption_bucketUpsertWithWhereUniqueWithoutUnits_lotInput | redemption_bucketUpsertWithWhereUniqueWithoutUnits_lotInput[]
    createMany?: redemption_bucketCreateManyUnits_lotInputEnvelope
    set?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    disconnect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    delete?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    connect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    update?: redemption_bucketUpdateWithWhereUniqueWithoutUnits_lotInput | redemption_bucketUpdateWithWhereUniqueWithoutUnits_lotInput[]
    updateMany?: redemption_bucketUpdateManyWithWhereWithoutUnits_lotInput | redemption_bucketUpdateManyWithWhereWithoutUnits_lotInput[]
    deleteMany?: redemption_bucketScalarWhereInput | redemption_bucketScalarWhereInput[]
  }

  export type transactionCreateNestedOneWithoutInvestment_transactionInput = {
    create?: XOR<transactionCreateWithoutInvestment_transactionInput, transactionUncheckedCreateWithoutInvestment_transactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutInvestment_transactionInput
    connect?: transactionWhereUniqueInput
  }

  export type accountCreateNestedOneWithoutInvestment_transactionsInput = {
    create?: XOR<accountCreateWithoutInvestment_transactionsInput, accountUncheckedCreateWithoutInvestment_transactionsInput>
    connectOrCreate?: accountCreateOrConnectWithoutInvestment_transactionsInput
    connect?: accountWhereUniqueInput
  }

  export type units_lotCreateNestedOneWithoutInvestment_transactionInput = {
    create?: XOR<units_lotCreateWithoutInvestment_transactionInput, units_lotUncheckedCreateWithoutInvestment_transactionInput>
    connectOrCreate?: units_lotCreateOrConnectWithoutInvestment_transactionInput
    connect?: units_lotWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type transactionUpdateOneRequiredWithoutInvestment_transactionNestedInput = {
    create?: XOR<transactionCreateWithoutInvestment_transactionInput, transactionUncheckedCreateWithoutInvestment_transactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutInvestment_transactionInput
    upsert?: transactionUpsertWithoutInvestment_transactionInput
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutInvestment_transactionInput, transactionUpdateWithoutInvestment_transactionInput>, transactionUncheckedUpdateWithoutInvestment_transactionInput>
  }

  export type accountUpdateOneRequiredWithoutInvestment_transactionsNestedInput = {
    create?: XOR<accountCreateWithoutInvestment_transactionsInput, accountUncheckedCreateWithoutInvestment_transactionsInput>
    connectOrCreate?: accountCreateOrConnectWithoutInvestment_transactionsInput
    upsert?: accountUpsertWithoutInvestment_transactionsInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutInvestment_transactionsInput, accountUpdateWithoutInvestment_transactionsInput>, accountUncheckedUpdateWithoutInvestment_transactionsInput>
  }

  export type units_lotUpdateOneRequiredWithoutInvestment_transactionNestedInput = {
    create?: XOR<units_lotCreateWithoutInvestment_transactionInput, units_lotUncheckedCreateWithoutInvestment_transactionInput>
    connectOrCreate?: units_lotCreateOrConnectWithoutInvestment_transactionInput
    upsert?: units_lotUpsertWithoutInvestment_transactionInput
    connect?: units_lotWhereUniqueInput
    update?: XOR<XOR<units_lotUpdateToOneWithWhereWithoutInvestment_transactionInput, units_lotUpdateWithoutInvestment_transactionInput>, units_lotUncheckedUpdateWithoutInvestment_transactionInput>
  }

  export type transactionCreateNestedOneWithoutRedemption_transactionInput = {
    create?: XOR<transactionCreateWithoutRedemption_transactionInput, transactionUncheckedCreateWithoutRedemption_transactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutRedemption_transactionInput
    connect?: transactionWhereUniqueInput
  }

  export type accountCreateNestedOneWithoutRedemption_transactionsInput = {
    create?: XOR<accountCreateWithoutRedemption_transactionsInput, accountUncheckedCreateWithoutRedemption_transactionsInput>
    connectOrCreate?: accountCreateOrConnectWithoutRedemption_transactionsInput
    connect?: accountWhereUniqueInput
  }

  export type redemption_bucketCreateNestedManyWithoutRedemption_transactionInput = {
    create?: XOR<redemption_bucketCreateWithoutRedemption_transactionInput, redemption_bucketUncheckedCreateWithoutRedemption_transactionInput> | redemption_bucketCreateWithoutRedemption_transactionInput[] | redemption_bucketUncheckedCreateWithoutRedemption_transactionInput[]
    connectOrCreate?: redemption_bucketCreateOrConnectWithoutRedemption_transactionInput | redemption_bucketCreateOrConnectWithoutRedemption_transactionInput[]
    createMany?: redemption_bucketCreateManyRedemption_transactionInputEnvelope
    connect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
  }

  export type redemption_bucketUncheckedCreateNestedManyWithoutRedemption_transactionInput = {
    create?: XOR<redemption_bucketCreateWithoutRedemption_transactionInput, redemption_bucketUncheckedCreateWithoutRedemption_transactionInput> | redemption_bucketCreateWithoutRedemption_transactionInput[] | redemption_bucketUncheckedCreateWithoutRedemption_transactionInput[]
    connectOrCreate?: redemption_bucketCreateOrConnectWithoutRedemption_transactionInput | redemption_bucketCreateOrConnectWithoutRedemption_transactionInput[]
    createMany?: redemption_bucketCreateManyRedemption_transactionInputEnvelope
    connect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
  }

  export type transactionUpdateOneRequiredWithoutRedemption_transactionNestedInput = {
    create?: XOR<transactionCreateWithoutRedemption_transactionInput, transactionUncheckedCreateWithoutRedemption_transactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutRedemption_transactionInput
    upsert?: transactionUpsertWithoutRedemption_transactionInput
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutRedemption_transactionInput, transactionUpdateWithoutRedemption_transactionInput>, transactionUncheckedUpdateWithoutRedemption_transactionInput>
  }

  export type accountUpdateOneRequiredWithoutRedemption_transactionsNestedInput = {
    create?: XOR<accountCreateWithoutRedemption_transactionsInput, accountUncheckedCreateWithoutRedemption_transactionsInput>
    connectOrCreate?: accountCreateOrConnectWithoutRedemption_transactionsInput
    upsert?: accountUpsertWithoutRedemption_transactionsInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutRedemption_transactionsInput, accountUpdateWithoutRedemption_transactionsInput>, accountUncheckedUpdateWithoutRedemption_transactionsInput>
  }

  export type redemption_bucketUpdateManyWithoutRedemption_transactionNestedInput = {
    create?: XOR<redemption_bucketCreateWithoutRedemption_transactionInput, redemption_bucketUncheckedCreateWithoutRedemption_transactionInput> | redemption_bucketCreateWithoutRedemption_transactionInput[] | redemption_bucketUncheckedCreateWithoutRedemption_transactionInput[]
    connectOrCreate?: redemption_bucketCreateOrConnectWithoutRedemption_transactionInput | redemption_bucketCreateOrConnectWithoutRedemption_transactionInput[]
    upsert?: redemption_bucketUpsertWithWhereUniqueWithoutRedemption_transactionInput | redemption_bucketUpsertWithWhereUniqueWithoutRedemption_transactionInput[]
    createMany?: redemption_bucketCreateManyRedemption_transactionInputEnvelope
    set?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    disconnect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    delete?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    connect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    update?: redemption_bucketUpdateWithWhereUniqueWithoutRedemption_transactionInput | redemption_bucketUpdateWithWhereUniqueWithoutRedemption_transactionInput[]
    updateMany?: redemption_bucketUpdateManyWithWhereWithoutRedemption_transactionInput | redemption_bucketUpdateManyWithWhereWithoutRedemption_transactionInput[]
    deleteMany?: redemption_bucketScalarWhereInput | redemption_bucketScalarWhereInput[]
  }

  export type redemption_bucketUncheckedUpdateManyWithoutRedemption_transactionNestedInput = {
    create?: XOR<redemption_bucketCreateWithoutRedemption_transactionInput, redemption_bucketUncheckedCreateWithoutRedemption_transactionInput> | redemption_bucketCreateWithoutRedemption_transactionInput[] | redemption_bucketUncheckedCreateWithoutRedemption_transactionInput[]
    connectOrCreate?: redemption_bucketCreateOrConnectWithoutRedemption_transactionInput | redemption_bucketCreateOrConnectWithoutRedemption_transactionInput[]
    upsert?: redemption_bucketUpsertWithWhereUniqueWithoutRedemption_transactionInput | redemption_bucketUpsertWithWhereUniqueWithoutRedemption_transactionInput[]
    createMany?: redemption_bucketCreateManyRedemption_transactionInputEnvelope
    set?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    disconnect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    delete?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    connect?: redemption_bucketWhereUniqueInput | redemption_bucketWhereUniqueInput[]
    update?: redemption_bucketUpdateWithWhereUniqueWithoutRedemption_transactionInput | redemption_bucketUpdateWithWhereUniqueWithoutRedemption_transactionInput[]
    updateMany?: redemption_bucketUpdateManyWithWhereWithoutRedemption_transactionInput | redemption_bucketUpdateManyWithWhereWithoutRedemption_transactionInput[]
    deleteMany?: redemption_bucketScalarWhereInput | redemption_bucketScalarWhereInput[]
  }

  export type redemption_transactionCreateNestedOneWithoutRedemption_bucketsInput = {
    create?: XOR<redemption_transactionCreateWithoutRedemption_bucketsInput, redemption_transactionUncheckedCreateWithoutRedemption_bucketsInput>
    connectOrCreate?: redemption_transactionCreateOrConnectWithoutRedemption_bucketsInput
    connect?: redemption_transactionWhereUniqueInput
  }

  export type units_lotCreateNestedOneWithoutRedemption_bucketsInput = {
    create?: XOR<units_lotCreateWithoutRedemption_bucketsInput, units_lotUncheckedCreateWithoutRedemption_bucketsInput>
    connectOrCreate?: units_lotCreateOrConnectWithoutRedemption_bucketsInput
    connect?: units_lotWhereUniqueInput
  }

  export type redemption_transactionUpdateOneRequiredWithoutRedemption_bucketsNestedInput = {
    create?: XOR<redemption_transactionCreateWithoutRedemption_bucketsInput, redemption_transactionUncheckedCreateWithoutRedemption_bucketsInput>
    connectOrCreate?: redemption_transactionCreateOrConnectWithoutRedemption_bucketsInput
    upsert?: redemption_transactionUpsertWithoutRedemption_bucketsInput
    connect?: redemption_transactionWhereUniqueInput
    update?: XOR<XOR<redemption_transactionUpdateToOneWithWhereWithoutRedemption_bucketsInput, redemption_transactionUpdateWithoutRedemption_bucketsInput>, redemption_transactionUncheckedUpdateWithoutRedemption_bucketsInput>
  }

  export type units_lotUpdateOneRequiredWithoutRedemption_bucketsNestedInput = {
    create?: XOR<units_lotCreateWithoutRedemption_bucketsInput, units_lotUncheckedCreateWithoutRedemption_bucketsInput>
    connectOrCreate?: units_lotCreateOrConnectWithoutRedemption_bucketsInput
    upsert?: units_lotUpsertWithoutRedemption_bucketsInput
    connect?: units_lotWhereUniqueInput
    update?: XOR<XOR<units_lotUpdateToOneWithWhereWithoutRedemption_bucketsInput, units_lotUpdateWithoutRedemption_bucketsInput>, units_lotUncheckedUpdateWithoutRedemption_bucketsInput>
  }

  export type transfer_transactionCreateNestedOneWithoutTransactionInput = {
    create?: XOR<transfer_transactionCreateWithoutTransactionInput, transfer_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutTransactionInput
    connect?: transfer_transactionWhereUniqueInput
  }

  export type expense_transactionCreateNestedOneWithoutTransactionInput = {
    create?: XOR<expense_transactionCreateWithoutTransactionInput, expense_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: expense_transactionCreateOrConnectWithoutTransactionInput
    connect?: expense_transactionWhereUniqueInput
  }

  export type income_transactionCreateNestedOneWithoutTransactionInput = {
    create?: XOR<income_transactionCreateWithoutTransactionInput, income_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: income_transactionCreateOrConnectWithoutTransactionInput
    connect?: income_transactionWhereUniqueInput
  }

  export type investment_transactionCreateNestedOneWithoutTransactionInput = {
    create?: XOR<investment_transactionCreateWithoutTransactionInput, investment_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: investment_transactionCreateOrConnectWithoutTransactionInput
    connect?: investment_transactionWhereUniqueInput
  }

  export type redemption_transactionCreateNestedOneWithoutTransactionInput = {
    create?: XOR<redemption_transactionCreateWithoutTransactionInput, redemption_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: redemption_transactionCreateOrConnectWithoutTransactionInput
    connect?: redemption_transactionWhereUniqueInput
  }

  export type transfer_transactionUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<transfer_transactionCreateWithoutTransactionInput, transfer_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutTransactionInput
    connect?: transfer_transactionWhereUniqueInput
  }

  export type expense_transactionUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<expense_transactionCreateWithoutTransactionInput, expense_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: expense_transactionCreateOrConnectWithoutTransactionInput
    connect?: expense_transactionWhereUniqueInput
  }

  export type income_transactionUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<income_transactionCreateWithoutTransactionInput, income_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: income_transactionCreateOrConnectWithoutTransactionInput
    connect?: income_transactionWhereUniqueInput
  }

  export type investment_transactionUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<investment_transactionCreateWithoutTransactionInput, investment_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: investment_transactionCreateOrConnectWithoutTransactionInput
    connect?: investment_transactionWhereUniqueInput
  }

  export type redemption_transactionUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<redemption_transactionCreateWithoutTransactionInput, redemption_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: redemption_transactionCreateOrConnectWithoutTransactionInput
    connect?: redemption_transactionWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Enumtransaction_typeFieldUpdateOperationsInput = {
    set?: $Enums.transaction_type
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type transfer_transactionUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<transfer_transactionCreateWithoutTransactionInput, transfer_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutTransactionInput
    upsert?: transfer_transactionUpsertWithoutTransactionInput
    disconnect?: transfer_transactionWhereInput | boolean
    delete?: transfer_transactionWhereInput | boolean
    connect?: transfer_transactionWhereUniqueInput
    update?: XOR<XOR<transfer_transactionUpdateToOneWithWhereWithoutTransactionInput, transfer_transactionUpdateWithoutTransactionInput>, transfer_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type expense_transactionUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<expense_transactionCreateWithoutTransactionInput, expense_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: expense_transactionCreateOrConnectWithoutTransactionInput
    upsert?: expense_transactionUpsertWithoutTransactionInput
    disconnect?: expense_transactionWhereInput | boolean
    delete?: expense_transactionWhereInput | boolean
    connect?: expense_transactionWhereUniqueInput
    update?: XOR<XOR<expense_transactionUpdateToOneWithWhereWithoutTransactionInput, expense_transactionUpdateWithoutTransactionInput>, expense_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type income_transactionUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<income_transactionCreateWithoutTransactionInput, income_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: income_transactionCreateOrConnectWithoutTransactionInput
    upsert?: income_transactionUpsertWithoutTransactionInput
    disconnect?: income_transactionWhereInput | boolean
    delete?: income_transactionWhereInput | boolean
    connect?: income_transactionWhereUniqueInput
    update?: XOR<XOR<income_transactionUpdateToOneWithWhereWithoutTransactionInput, income_transactionUpdateWithoutTransactionInput>, income_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type investment_transactionUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<investment_transactionCreateWithoutTransactionInput, investment_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: investment_transactionCreateOrConnectWithoutTransactionInput
    upsert?: investment_transactionUpsertWithoutTransactionInput
    disconnect?: investment_transactionWhereInput | boolean
    delete?: investment_transactionWhereInput | boolean
    connect?: investment_transactionWhereUniqueInput
    update?: XOR<XOR<investment_transactionUpdateToOneWithWhereWithoutTransactionInput, investment_transactionUpdateWithoutTransactionInput>, investment_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type redemption_transactionUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<redemption_transactionCreateWithoutTransactionInput, redemption_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: redemption_transactionCreateOrConnectWithoutTransactionInput
    upsert?: redemption_transactionUpsertWithoutTransactionInput
    disconnect?: redemption_transactionWhereInput | boolean
    delete?: redemption_transactionWhereInput | boolean
    connect?: redemption_transactionWhereUniqueInput
    update?: XOR<XOR<redemption_transactionUpdateToOneWithWhereWithoutTransactionInput, redemption_transactionUpdateWithoutTransactionInput>, redemption_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type transfer_transactionUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<transfer_transactionCreateWithoutTransactionInput, transfer_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: transfer_transactionCreateOrConnectWithoutTransactionInput
    upsert?: transfer_transactionUpsertWithoutTransactionInput
    disconnect?: transfer_transactionWhereInput | boolean
    delete?: transfer_transactionWhereInput | boolean
    connect?: transfer_transactionWhereUniqueInput
    update?: XOR<XOR<transfer_transactionUpdateToOneWithWhereWithoutTransactionInput, transfer_transactionUpdateWithoutTransactionInput>, transfer_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type expense_transactionUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<expense_transactionCreateWithoutTransactionInput, expense_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: expense_transactionCreateOrConnectWithoutTransactionInput
    upsert?: expense_transactionUpsertWithoutTransactionInput
    disconnect?: expense_transactionWhereInput | boolean
    delete?: expense_transactionWhereInput | boolean
    connect?: expense_transactionWhereUniqueInput
    update?: XOR<XOR<expense_transactionUpdateToOneWithWhereWithoutTransactionInput, expense_transactionUpdateWithoutTransactionInput>, expense_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type income_transactionUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<income_transactionCreateWithoutTransactionInput, income_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: income_transactionCreateOrConnectWithoutTransactionInput
    upsert?: income_transactionUpsertWithoutTransactionInput
    disconnect?: income_transactionWhereInput | boolean
    delete?: income_transactionWhereInput | boolean
    connect?: income_transactionWhereUniqueInput
    update?: XOR<XOR<income_transactionUpdateToOneWithWhereWithoutTransactionInput, income_transactionUpdateWithoutTransactionInput>, income_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type investment_transactionUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<investment_transactionCreateWithoutTransactionInput, investment_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: investment_transactionCreateOrConnectWithoutTransactionInput
    upsert?: investment_transactionUpsertWithoutTransactionInput
    disconnect?: investment_transactionWhereInput | boolean
    delete?: investment_transactionWhereInput | boolean
    connect?: investment_transactionWhereUniqueInput
    update?: XOR<XOR<investment_transactionUpdateToOneWithWhereWithoutTransactionInput, investment_transactionUpdateWithoutTransactionInput>, investment_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type redemption_transactionUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<redemption_transactionCreateWithoutTransactionInput, redemption_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: redemption_transactionCreateOrConnectWithoutTransactionInput
    upsert?: redemption_transactionUpsertWithoutTransactionInput
    disconnect?: redemption_transactionWhereInput | boolean
    delete?: redemption_transactionWhereInput | boolean
    connect?: redemption_transactionWhereUniqueInput
    update?: XOR<XOR<redemption_transactionUpdateToOneWithWhereWithoutTransactionInput, redemption_transactionUpdateWithoutTransactionInput>, redemption_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type transactionCreateNestedOneWithoutTransfer_transactionInput = {
    create?: XOR<transactionCreateWithoutTransfer_transactionInput, transactionUncheckedCreateWithoutTransfer_transactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutTransfer_transactionInput
    connect?: transactionWhereUniqueInput
  }

  export type accountCreateNestedOneWithoutFrom_transfersInput = {
    create?: XOR<accountCreateWithoutFrom_transfersInput, accountUncheckedCreateWithoutFrom_transfersInput>
    connectOrCreate?: accountCreateOrConnectWithoutFrom_transfersInput
    connect?: accountWhereUniqueInput
  }

  export type accountCreateNestedOneWithoutTo_transfersInput = {
    create?: XOR<accountCreateWithoutTo_transfersInput, accountUncheckedCreateWithoutTo_transfersInput>
    connectOrCreate?: accountCreateOrConnectWithoutTo_transfersInput
    connect?: accountWhereUniqueInput
  }

  export type transactionUpdateOneRequiredWithoutTransfer_transactionNestedInput = {
    create?: XOR<transactionCreateWithoutTransfer_transactionInput, transactionUncheckedCreateWithoutTransfer_transactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutTransfer_transactionInput
    upsert?: transactionUpsertWithoutTransfer_transactionInput
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutTransfer_transactionInput, transactionUpdateWithoutTransfer_transactionInput>, transactionUncheckedUpdateWithoutTransfer_transactionInput>
  }

  export type accountUpdateOneRequiredWithoutFrom_transfersNestedInput = {
    create?: XOR<accountCreateWithoutFrom_transfersInput, accountUncheckedCreateWithoutFrom_transfersInput>
    connectOrCreate?: accountCreateOrConnectWithoutFrom_transfersInput
    upsert?: accountUpsertWithoutFrom_transfersInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutFrom_transfersInput, accountUpdateWithoutFrom_transfersInput>, accountUncheckedUpdateWithoutFrom_transfersInput>
  }

  export type accountUpdateOneRequiredWithoutTo_transfersNestedInput = {
    create?: XOR<accountCreateWithoutTo_transfersInput, accountUncheckedCreateWithoutTo_transfersInput>
    connectOrCreate?: accountCreateOrConnectWithoutTo_transfersInput
    upsert?: accountUpsertWithoutTo_transfersInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutTo_transfersInput, accountUpdateWithoutTo_transfersInput>, accountUncheckedUpdateWithoutTo_transfersInput>
  }

  export type transactionCreateNestedOneWithoutExpense_transactionInput = {
    create?: XOR<transactionCreateWithoutExpense_transactionInput, transactionUncheckedCreateWithoutExpense_transactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutExpense_transactionInput
    connect?: transactionWhereUniqueInput
  }

  export type accountCreateNestedOneWithoutExpense_transactionsInput = {
    create?: XOR<accountCreateWithoutExpense_transactionsInput, accountUncheckedCreateWithoutExpense_transactionsInput>
    connectOrCreate?: accountCreateOrConnectWithoutExpense_transactionsInput
    connect?: accountWhereUniqueInput
  }

  export type expense_itemCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<expense_itemCreateWithoutTransactionsInput, expense_itemUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: expense_itemCreateOrConnectWithoutTransactionsInput
    connect?: expense_itemWhereUniqueInput
  }

  export type transactionUpdateOneRequiredWithoutExpense_transactionNestedInput = {
    create?: XOR<transactionCreateWithoutExpense_transactionInput, transactionUncheckedCreateWithoutExpense_transactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutExpense_transactionInput
    upsert?: transactionUpsertWithoutExpense_transactionInput
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutExpense_transactionInput, transactionUpdateWithoutExpense_transactionInput>, transactionUncheckedUpdateWithoutExpense_transactionInput>
  }

  export type accountUpdateOneRequiredWithoutExpense_transactionsNestedInput = {
    create?: XOR<accountCreateWithoutExpense_transactionsInput, accountUncheckedCreateWithoutExpense_transactionsInput>
    connectOrCreate?: accountCreateOrConnectWithoutExpense_transactionsInput
    upsert?: accountUpsertWithoutExpense_transactionsInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutExpense_transactionsInput, accountUpdateWithoutExpense_transactionsInput>, accountUncheckedUpdateWithoutExpense_transactionsInput>
  }

  export type expense_itemUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<expense_itemCreateWithoutTransactionsInput, expense_itemUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: expense_itemCreateOrConnectWithoutTransactionsInput
    upsert?: expense_itemUpsertWithoutTransactionsInput
    connect?: expense_itemWhereUniqueInput
    update?: XOR<XOR<expense_itemUpdateToOneWithWhereWithoutTransactionsInput, expense_itemUpdateWithoutTransactionsInput>, expense_itemUncheckedUpdateWithoutTransactionsInput>
  }

  export type transactionCreateNestedOneWithoutIncome_transactionInput = {
    create?: XOR<transactionCreateWithoutIncome_transactionInput, transactionUncheckedCreateWithoutIncome_transactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutIncome_transactionInput
    connect?: transactionWhereUniqueInput
  }

  export type income_sourceCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<income_sourceCreateWithoutTransactionsInput, income_sourceUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: income_sourceCreateOrConnectWithoutTransactionsInput
    connect?: income_sourceWhereUniqueInput
  }

  export type accountCreateNestedOneWithoutIncome_transactionsInput = {
    create?: XOR<accountCreateWithoutIncome_transactionsInput, accountUncheckedCreateWithoutIncome_transactionsInput>
    connectOrCreate?: accountCreateOrConnectWithoutIncome_transactionsInput
    connect?: accountWhereUniqueInput
  }

  export type transactionUpdateOneRequiredWithoutIncome_transactionNestedInput = {
    create?: XOR<transactionCreateWithoutIncome_transactionInput, transactionUncheckedCreateWithoutIncome_transactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutIncome_transactionInput
    upsert?: transactionUpsertWithoutIncome_transactionInput
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutIncome_transactionInput, transactionUpdateWithoutIncome_transactionInput>, transactionUncheckedUpdateWithoutIncome_transactionInput>
  }

  export type income_sourceUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<income_sourceCreateWithoutTransactionsInput, income_sourceUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: income_sourceCreateOrConnectWithoutTransactionsInput
    upsert?: income_sourceUpsertWithoutTransactionsInput
    connect?: income_sourceWhereUniqueInput
    update?: XOR<XOR<income_sourceUpdateToOneWithWhereWithoutTransactionsInput, income_sourceUpdateWithoutTransactionsInput>, income_sourceUncheckedUpdateWithoutTransactionsInput>
  }

  export type accountUpdateOneRequiredWithoutIncome_transactionsNestedInput = {
    create?: XOR<accountCreateWithoutIncome_transactionsInput, accountUncheckedCreateWithoutIncome_transactionsInput>
    connectOrCreate?: accountCreateOrConnectWithoutIncome_transactionsInput
    upsert?: accountUpsertWithoutIncome_transactionsInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutIncome_transactionsInput, accountUpdateWithoutIncome_transactionsInput>, accountUncheckedUpdateWithoutIncome_transactionsInput>
  }

  export type Enumdb_history_event_typeFieldUpdateOperationsInput = {
    set?: $Enums.db_history_event_type
  }

  export type Enumdb_history_entity_typeFieldUpdateOperationsInput = {
    set?: $Enums.db_history_entity_type
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumtransaction_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type | Enumtransaction_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type[]
    notIn?: $Enums.transaction_type[]
    not?: NestedEnumtransaction_typeFilter<$PrismaModel> | $Enums.transaction_type
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumtransaction_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type | Enumtransaction_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type[]
    notIn?: $Enums.transaction_type[]
    not?: NestedEnumtransaction_typeWithAggregatesFilter<$PrismaModel> | $Enums.transaction_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaction_typeFilter<$PrismaModel>
    _max?: NestedEnumtransaction_typeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumdb_history_event_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.db_history_event_type | Enumdb_history_event_typeFieldRefInput<$PrismaModel>
    in?: $Enums.db_history_event_type[]
    notIn?: $Enums.db_history_event_type[]
    not?: NestedEnumdb_history_event_typeFilter<$PrismaModel> | $Enums.db_history_event_type
  }

  export type NestedEnumdb_history_entity_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.db_history_entity_type | Enumdb_history_entity_typeFieldRefInput<$PrismaModel>
    in?: $Enums.db_history_entity_type[]
    notIn?: $Enums.db_history_entity_type[]
    not?: NestedEnumdb_history_entity_typeFilter<$PrismaModel> | $Enums.db_history_entity_type
  }

  export type NestedEnumdb_history_event_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.db_history_event_type | Enumdb_history_event_typeFieldRefInput<$PrismaModel>
    in?: $Enums.db_history_event_type[]
    notIn?: $Enums.db_history_event_type[]
    not?: NestedEnumdb_history_event_typeWithAggregatesFilter<$PrismaModel> | $Enums.db_history_event_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdb_history_event_typeFilter<$PrismaModel>
    _max?: NestedEnumdb_history_event_typeFilter<$PrismaModel>
  }

  export type NestedEnumdb_history_entity_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.db_history_entity_type | Enumdb_history_entity_typeFieldRefInput<$PrismaModel>
    in?: $Enums.db_history_entity_type[]
    notIn?: $Enums.db_history_entity_type[]
    not?: NestedEnumdb_history_entity_typeWithAggregatesFilter<$PrismaModel> | $Enums.db_history_entity_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdb_history_entity_typeFilter<$PrismaModel>
    _max?: NestedEnumdb_history_entity_typeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type transfer_transactionCreateWithoutFrom_accountInput = {
    id?: string
    transaction: transactionCreateNestedOneWithoutTransfer_transactionInput
    to_account: accountCreateNestedOneWithoutTo_transfersInput
  }

  export type transfer_transactionUncheckedCreateWithoutFrom_accountInput = {
    id?: string
    to_account_id: string
    transaction_id: string
  }

  export type transfer_transactionCreateOrConnectWithoutFrom_accountInput = {
    where: transfer_transactionWhereUniqueInput
    create: XOR<transfer_transactionCreateWithoutFrom_accountInput, transfer_transactionUncheckedCreateWithoutFrom_accountInput>
  }

  export type transfer_transactionCreateManyFrom_accountInputEnvelope = {
    data: transfer_transactionCreateManyFrom_accountInput | transfer_transactionCreateManyFrom_accountInput[]
  }

  export type transfer_transactionCreateWithoutTo_accountInput = {
    id?: string
    transaction: transactionCreateNestedOneWithoutTransfer_transactionInput
    from_account: accountCreateNestedOneWithoutFrom_transfersInput
  }

  export type transfer_transactionUncheckedCreateWithoutTo_accountInput = {
    id?: string
    from_account_id: string
    transaction_id: string
  }

  export type transfer_transactionCreateOrConnectWithoutTo_accountInput = {
    where: transfer_transactionWhereUniqueInput
    create: XOR<transfer_transactionCreateWithoutTo_accountInput, transfer_transactionUncheckedCreateWithoutTo_accountInput>
  }

  export type transfer_transactionCreateManyTo_accountInputEnvelope = {
    data: transfer_transactionCreateManyTo_accountInput | transfer_transactionCreateManyTo_accountInput[]
  }

  export type income_transactionCreateWithoutAccountInput = {
    id?: string
    transaction: transactionCreateNestedOneWithoutIncome_transactionInput
    income_source: income_sourceCreateNestedOneWithoutTransactionsInput
  }

  export type income_transactionUncheckedCreateWithoutAccountInput = {
    id?: string
    income_source_id: string
    transaction_id: string
  }

  export type income_transactionCreateOrConnectWithoutAccountInput = {
    where: income_transactionWhereUniqueInput
    create: XOR<income_transactionCreateWithoutAccountInput, income_transactionUncheckedCreateWithoutAccountInput>
  }

  export type income_transactionCreateManyAccountInputEnvelope = {
    data: income_transactionCreateManyAccountInput | income_transactionCreateManyAccountInput[]
  }

  export type expense_transactionCreateWithoutAccountInput = {
    id?: string
    transaction: transactionCreateNestedOneWithoutExpense_transactionInput
    expense_item: expense_itemCreateNestedOneWithoutTransactionsInput
  }

  export type expense_transactionUncheckedCreateWithoutAccountInput = {
    id?: string
    expense_item_id: string
    transaction_id: string
  }

  export type expense_transactionCreateOrConnectWithoutAccountInput = {
    where: expense_transactionWhereUniqueInput
    create: XOR<expense_transactionCreateWithoutAccountInput, expense_transactionUncheckedCreateWithoutAccountInput>
  }

  export type expense_transactionCreateManyAccountInputEnvelope = {
    data: expense_transactionCreateManyAccountInput | expense_transactionCreateManyAccountInput[]
  }

  export type investment_transactionCreateWithoutFrom_accountInput = {
    id?: string
    units_bought: number
    buy_nav: number
    allotment_date: Date | string
    transaction: transactionCreateNestedOneWithoutInvestment_transactionInput
    units_lot: units_lotCreateNestedOneWithoutInvestment_transactionInput
  }

  export type investment_transactionUncheckedCreateWithoutFrom_accountInput = {
    id?: string
    units_bought: number
    buy_nav: number
    allotment_date: Date | string
    units_lot_id: string
    transaction_id: string
  }

  export type investment_transactionCreateOrConnectWithoutFrom_accountInput = {
    where: investment_transactionWhereUniqueInput
    create: XOR<investment_transactionCreateWithoutFrom_accountInput, investment_transactionUncheckedCreateWithoutFrom_accountInput>
  }

  export type investment_transactionCreateManyFrom_accountInputEnvelope = {
    data: investment_transactionCreateManyFrom_accountInput | investment_transactionCreateManyFrom_accountInput[]
  }

  export type redemption_transactionCreateWithoutTo_accountInput = {
    id?: string
    sell_nav: number
    redemption_date: Date | string
    transaction: transactionCreateNestedOneWithoutRedemption_transactionInput
    redemption_buckets?: redemption_bucketCreateNestedManyWithoutRedemption_transactionInput
  }

  export type redemption_transactionUncheckedCreateWithoutTo_accountInput = {
    id?: string
    sell_nav: number
    redemption_date: Date | string
    transaction_id: string
    redemption_buckets?: redemption_bucketUncheckedCreateNestedManyWithoutRedemption_transactionInput
  }

  export type redemption_transactionCreateOrConnectWithoutTo_accountInput = {
    where: redemption_transactionWhereUniqueInput
    create: XOR<redemption_transactionCreateWithoutTo_accountInput, redemption_transactionUncheckedCreateWithoutTo_accountInput>
  }

  export type redemption_transactionCreateManyTo_accountInputEnvelope = {
    data: redemption_transactionCreateManyTo_accountInput | redemption_transactionCreateManyTo_accountInput[]
  }

  export type transfer_transactionUpsertWithWhereUniqueWithoutFrom_accountInput = {
    where: transfer_transactionWhereUniqueInput
    update: XOR<transfer_transactionUpdateWithoutFrom_accountInput, transfer_transactionUncheckedUpdateWithoutFrom_accountInput>
    create: XOR<transfer_transactionCreateWithoutFrom_accountInput, transfer_transactionUncheckedCreateWithoutFrom_accountInput>
  }

  export type transfer_transactionUpdateWithWhereUniqueWithoutFrom_accountInput = {
    where: transfer_transactionWhereUniqueInput
    data: XOR<transfer_transactionUpdateWithoutFrom_accountInput, transfer_transactionUncheckedUpdateWithoutFrom_accountInput>
  }

  export type transfer_transactionUpdateManyWithWhereWithoutFrom_accountInput = {
    where: transfer_transactionScalarWhereInput
    data: XOR<transfer_transactionUpdateManyMutationInput, transfer_transactionUncheckedUpdateManyWithoutFrom_accountInput>
  }

  export type transfer_transactionScalarWhereInput = {
    AND?: transfer_transactionScalarWhereInput | transfer_transactionScalarWhereInput[]
    OR?: transfer_transactionScalarWhereInput[]
    NOT?: transfer_transactionScalarWhereInput | transfer_transactionScalarWhereInput[]
    id?: StringFilter<"transfer_transaction"> | string
    from_account_id?: StringFilter<"transfer_transaction"> | string
    to_account_id?: StringFilter<"transfer_transaction"> | string
    transaction_id?: StringFilter<"transfer_transaction"> | string
  }

  export type transfer_transactionUpsertWithWhereUniqueWithoutTo_accountInput = {
    where: transfer_transactionWhereUniqueInput
    update: XOR<transfer_transactionUpdateWithoutTo_accountInput, transfer_transactionUncheckedUpdateWithoutTo_accountInput>
    create: XOR<transfer_transactionCreateWithoutTo_accountInput, transfer_transactionUncheckedCreateWithoutTo_accountInput>
  }

  export type transfer_transactionUpdateWithWhereUniqueWithoutTo_accountInput = {
    where: transfer_transactionWhereUniqueInput
    data: XOR<transfer_transactionUpdateWithoutTo_accountInput, transfer_transactionUncheckedUpdateWithoutTo_accountInput>
  }

  export type transfer_transactionUpdateManyWithWhereWithoutTo_accountInput = {
    where: transfer_transactionScalarWhereInput
    data: XOR<transfer_transactionUpdateManyMutationInput, transfer_transactionUncheckedUpdateManyWithoutTo_accountInput>
  }

  export type income_transactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: income_transactionWhereUniqueInput
    update: XOR<income_transactionUpdateWithoutAccountInput, income_transactionUncheckedUpdateWithoutAccountInput>
    create: XOR<income_transactionCreateWithoutAccountInput, income_transactionUncheckedCreateWithoutAccountInput>
  }

  export type income_transactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: income_transactionWhereUniqueInput
    data: XOR<income_transactionUpdateWithoutAccountInput, income_transactionUncheckedUpdateWithoutAccountInput>
  }

  export type income_transactionUpdateManyWithWhereWithoutAccountInput = {
    where: income_transactionScalarWhereInput
    data: XOR<income_transactionUpdateManyMutationInput, income_transactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type income_transactionScalarWhereInput = {
    AND?: income_transactionScalarWhereInput | income_transactionScalarWhereInput[]
    OR?: income_transactionScalarWhereInput[]
    NOT?: income_transactionScalarWhereInput | income_transactionScalarWhereInput[]
    id?: StringFilter<"income_transaction"> | string
    income_source_id?: StringFilter<"income_transaction"> | string
    account_id?: StringFilter<"income_transaction"> | string
    transaction_id?: StringFilter<"income_transaction"> | string
  }

  export type expense_transactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: expense_transactionWhereUniqueInput
    update: XOR<expense_transactionUpdateWithoutAccountInput, expense_transactionUncheckedUpdateWithoutAccountInput>
    create: XOR<expense_transactionCreateWithoutAccountInput, expense_transactionUncheckedCreateWithoutAccountInput>
  }

  export type expense_transactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: expense_transactionWhereUniqueInput
    data: XOR<expense_transactionUpdateWithoutAccountInput, expense_transactionUncheckedUpdateWithoutAccountInput>
  }

  export type expense_transactionUpdateManyWithWhereWithoutAccountInput = {
    where: expense_transactionScalarWhereInput
    data: XOR<expense_transactionUpdateManyMutationInput, expense_transactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type expense_transactionScalarWhereInput = {
    AND?: expense_transactionScalarWhereInput | expense_transactionScalarWhereInput[]
    OR?: expense_transactionScalarWhereInput[]
    NOT?: expense_transactionScalarWhereInput | expense_transactionScalarWhereInput[]
    id?: StringFilter<"expense_transaction"> | string
    account_id?: StringFilter<"expense_transaction"> | string
    expense_item_id?: StringFilter<"expense_transaction"> | string
    transaction_id?: StringFilter<"expense_transaction"> | string
  }

  export type investment_transactionUpsertWithWhereUniqueWithoutFrom_accountInput = {
    where: investment_transactionWhereUniqueInput
    update: XOR<investment_transactionUpdateWithoutFrom_accountInput, investment_transactionUncheckedUpdateWithoutFrom_accountInput>
    create: XOR<investment_transactionCreateWithoutFrom_accountInput, investment_transactionUncheckedCreateWithoutFrom_accountInput>
  }

  export type investment_transactionUpdateWithWhereUniqueWithoutFrom_accountInput = {
    where: investment_transactionWhereUniqueInput
    data: XOR<investment_transactionUpdateWithoutFrom_accountInput, investment_transactionUncheckedUpdateWithoutFrom_accountInput>
  }

  export type investment_transactionUpdateManyWithWhereWithoutFrom_accountInput = {
    where: investment_transactionScalarWhereInput
    data: XOR<investment_transactionUpdateManyMutationInput, investment_transactionUncheckedUpdateManyWithoutFrom_accountInput>
  }

  export type investment_transactionScalarWhereInput = {
    AND?: investment_transactionScalarWhereInput | investment_transactionScalarWhereInput[]
    OR?: investment_transactionScalarWhereInput[]
    NOT?: investment_transactionScalarWhereInput | investment_transactionScalarWhereInput[]
    id?: StringFilter<"investment_transaction"> | string
    from_account_id?: StringFilter<"investment_transaction"> | string
    units_bought?: FloatFilter<"investment_transaction"> | number
    buy_nav?: FloatFilter<"investment_transaction"> | number
    allotment_date?: DateTimeFilter<"investment_transaction"> | Date | string
    units_lot_id?: StringFilter<"investment_transaction"> | string
    transaction_id?: StringFilter<"investment_transaction"> | string
  }

  export type redemption_transactionUpsertWithWhereUniqueWithoutTo_accountInput = {
    where: redemption_transactionWhereUniqueInput
    update: XOR<redemption_transactionUpdateWithoutTo_accountInput, redemption_transactionUncheckedUpdateWithoutTo_accountInput>
    create: XOR<redemption_transactionCreateWithoutTo_accountInput, redemption_transactionUncheckedCreateWithoutTo_accountInput>
  }

  export type redemption_transactionUpdateWithWhereUniqueWithoutTo_accountInput = {
    where: redemption_transactionWhereUniqueInput
    data: XOR<redemption_transactionUpdateWithoutTo_accountInput, redemption_transactionUncheckedUpdateWithoutTo_accountInput>
  }

  export type redemption_transactionUpdateManyWithWhereWithoutTo_accountInput = {
    where: redemption_transactionScalarWhereInput
    data: XOR<redemption_transactionUpdateManyMutationInput, redemption_transactionUncheckedUpdateManyWithoutTo_accountInput>
  }

  export type redemption_transactionScalarWhereInput = {
    AND?: redemption_transactionScalarWhereInput | redemption_transactionScalarWhereInput[]
    OR?: redemption_transactionScalarWhereInput[]
    NOT?: redemption_transactionScalarWhereInput | redemption_transactionScalarWhereInput[]
    id?: StringFilter<"redemption_transaction"> | string
    to_account_id?: StringFilter<"redemption_transaction"> | string
    sell_nav?: FloatFilter<"redemption_transaction"> | number
    redemption_date?: DateTimeFilter<"redemption_transaction"> | Date | string
    transaction_id?: StringFilter<"redemption_transaction"> | string
  }

  export type income_transactionCreateWithoutIncome_sourceInput = {
    id?: string
    transaction: transactionCreateNestedOneWithoutIncome_transactionInput
    account: accountCreateNestedOneWithoutIncome_transactionsInput
  }

  export type income_transactionUncheckedCreateWithoutIncome_sourceInput = {
    id?: string
    account_id: string
    transaction_id: string
  }

  export type income_transactionCreateOrConnectWithoutIncome_sourceInput = {
    where: income_transactionWhereUniqueInput
    create: XOR<income_transactionCreateWithoutIncome_sourceInput, income_transactionUncheckedCreateWithoutIncome_sourceInput>
  }

  export type income_transactionCreateManyIncome_sourceInputEnvelope = {
    data: income_transactionCreateManyIncome_sourceInput | income_transactionCreateManyIncome_sourceInput[]
  }

  export type income_transactionUpsertWithWhereUniqueWithoutIncome_sourceInput = {
    where: income_transactionWhereUniqueInput
    update: XOR<income_transactionUpdateWithoutIncome_sourceInput, income_transactionUncheckedUpdateWithoutIncome_sourceInput>
    create: XOR<income_transactionCreateWithoutIncome_sourceInput, income_transactionUncheckedCreateWithoutIncome_sourceInput>
  }

  export type income_transactionUpdateWithWhereUniqueWithoutIncome_sourceInput = {
    where: income_transactionWhereUniqueInput
    data: XOR<income_transactionUpdateWithoutIncome_sourceInput, income_transactionUncheckedUpdateWithoutIncome_sourceInput>
  }

  export type income_transactionUpdateManyWithWhereWithoutIncome_sourceInput = {
    where: income_transactionScalarWhereInput
    data: XOR<income_transactionUpdateManyMutationInput, income_transactionUncheckedUpdateManyWithoutIncome_sourceInput>
  }

  export type expense_transactionCreateWithoutExpense_itemInput = {
    id?: string
    transaction: transactionCreateNestedOneWithoutExpense_transactionInput
    account: accountCreateNestedOneWithoutExpense_transactionsInput
  }

  export type expense_transactionUncheckedCreateWithoutExpense_itemInput = {
    id?: string
    account_id: string
    transaction_id: string
  }

  export type expense_transactionCreateOrConnectWithoutExpense_itemInput = {
    where: expense_transactionWhereUniqueInput
    create: XOR<expense_transactionCreateWithoutExpense_itemInput, expense_transactionUncheckedCreateWithoutExpense_itemInput>
  }

  export type expense_transactionCreateManyExpense_itemInputEnvelope = {
    data: expense_transactionCreateManyExpense_itemInput | expense_transactionCreateManyExpense_itemInput[]
  }

  export type expense_transactionUpsertWithWhereUniqueWithoutExpense_itemInput = {
    where: expense_transactionWhereUniqueInput
    update: XOR<expense_transactionUpdateWithoutExpense_itemInput, expense_transactionUncheckedUpdateWithoutExpense_itemInput>
    create: XOR<expense_transactionCreateWithoutExpense_itemInput, expense_transactionUncheckedCreateWithoutExpense_itemInput>
  }

  export type expense_transactionUpdateWithWhereUniqueWithoutExpense_itemInput = {
    where: expense_transactionWhereUniqueInput
    data: XOR<expense_transactionUpdateWithoutExpense_itemInput, expense_transactionUncheckedUpdateWithoutExpense_itemInput>
  }

  export type expense_transactionUpdateManyWithWhereWithoutExpense_itemInput = {
    where: expense_transactionScalarWhereInput
    data: XOR<expense_transactionUpdateManyMutationInput, expense_transactionUncheckedUpdateManyWithoutExpense_itemInput>
  }

  export type units_lotCreateWithoutMutual_fundInput = {
    id?: string
    investment_transaction?: investment_transactionCreateNestedOneWithoutUnits_lotInput
    redemption_buckets?: redemption_bucketCreateNestedManyWithoutUnits_lotInput
  }

  export type units_lotUncheckedCreateWithoutMutual_fundInput = {
    id?: string
    investment_transaction?: investment_transactionUncheckedCreateNestedOneWithoutUnits_lotInput
    redemption_buckets?: redemption_bucketUncheckedCreateNestedManyWithoutUnits_lotInput
  }

  export type units_lotCreateOrConnectWithoutMutual_fundInput = {
    where: units_lotWhereUniqueInput
    create: XOR<units_lotCreateWithoutMutual_fundInput, units_lotUncheckedCreateWithoutMutual_fundInput>
  }

  export type units_lotCreateManyMutual_fundInputEnvelope = {
    data: units_lotCreateManyMutual_fundInput | units_lotCreateManyMutual_fundInput[]
  }

  export type units_lotUpsertWithWhereUniqueWithoutMutual_fundInput = {
    where: units_lotWhereUniqueInput
    update: XOR<units_lotUpdateWithoutMutual_fundInput, units_lotUncheckedUpdateWithoutMutual_fundInput>
    create: XOR<units_lotCreateWithoutMutual_fundInput, units_lotUncheckedCreateWithoutMutual_fundInput>
  }

  export type units_lotUpdateWithWhereUniqueWithoutMutual_fundInput = {
    where: units_lotWhereUniqueInput
    data: XOR<units_lotUpdateWithoutMutual_fundInput, units_lotUncheckedUpdateWithoutMutual_fundInput>
  }

  export type units_lotUpdateManyWithWhereWithoutMutual_fundInput = {
    where: units_lotScalarWhereInput
    data: XOR<units_lotUpdateManyMutationInput, units_lotUncheckedUpdateManyWithoutMutual_fundInput>
  }

  export type units_lotScalarWhereInput = {
    AND?: units_lotScalarWhereInput | units_lotScalarWhereInput[]
    OR?: units_lotScalarWhereInput[]
    NOT?: units_lotScalarWhereInput | units_lotScalarWhereInput[]
    id?: StringFilter<"units_lot"> | string
    mutual_fund_id?: StringFilter<"units_lot"> | string
  }

  export type investment_transactionCreateWithoutUnits_lotInput = {
    id?: string
    units_bought: number
    buy_nav: number
    allotment_date: Date | string
    transaction: transactionCreateNestedOneWithoutInvestment_transactionInput
    from_account: accountCreateNestedOneWithoutInvestment_transactionsInput
  }

  export type investment_transactionUncheckedCreateWithoutUnits_lotInput = {
    id?: string
    from_account_id: string
    units_bought: number
    buy_nav: number
    allotment_date: Date | string
    transaction_id: string
  }

  export type investment_transactionCreateOrConnectWithoutUnits_lotInput = {
    where: investment_transactionWhereUniqueInput
    create: XOR<investment_transactionCreateWithoutUnits_lotInput, investment_transactionUncheckedCreateWithoutUnits_lotInput>
  }

  export type redemption_bucketCreateWithoutUnits_lotInput = {
    id?: string
    units_redeemed: number
    redemption_transaction: redemption_transactionCreateNestedOneWithoutRedemption_bucketsInput
  }

  export type redemption_bucketUncheckedCreateWithoutUnits_lotInput = {
    id?: string
    redemption_transaction_id: string
    units_redeemed: number
  }

  export type redemption_bucketCreateOrConnectWithoutUnits_lotInput = {
    where: redemption_bucketWhereUniqueInput
    create: XOR<redemption_bucketCreateWithoutUnits_lotInput, redemption_bucketUncheckedCreateWithoutUnits_lotInput>
  }

  export type redemption_bucketCreateManyUnits_lotInputEnvelope = {
    data: redemption_bucketCreateManyUnits_lotInput | redemption_bucketCreateManyUnits_lotInput[]
  }

  export type mutual_fundCreateWithoutUnits_lotsInput = {
    id?: string
    name: string
    isin: string
  }

  export type mutual_fundUncheckedCreateWithoutUnits_lotsInput = {
    id?: string
    name: string
    isin: string
  }

  export type mutual_fundCreateOrConnectWithoutUnits_lotsInput = {
    where: mutual_fundWhereUniqueInput
    create: XOR<mutual_fundCreateWithoutUnits_lotsInput, mutual_fundUncheckedCreateWithoutUnits_lotsInput>
  }

  export type investment_transactionUpsertWithoutUnits_lotInput = {
    update: XOR<investment_transactionUpdateWithoutUnits_lotInput, investment_transactionUncheckedUpdateWithoutUnits_lotInput>
    create: XOR<investment_transactionCreateWithoutUnits_lotInput, investment_transactionUncheckedCreateWithoutUnits_lotInput>
    where?: investment_transactionWhereInput
  }

  export type investment_transactionUpdateToOneWithWhereWithoutUnits_lotInput = {
    where?: investment_transactionWhereInput
    data: XOR<investment_transactionUpdateWithoutUnits_lotInput, investment_transactionUncheckedUpdateWithoutUnits_lotInput>
  }

  export type investment_transactionUpdateWithoutUnits_lotInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_bought?: FloatFieldUpdateOperationsInput | number
    buy_nav?: FloatFieldUpdateOperationsInput | number
    allotment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: transactionUpdateOneRequiredWithoutInvestment_transactionNestedInput
    from_account?: accountUpdateOneRequiredWithoutInvestment_transactionsNestedInput
  }

  export type investment_transactionUncheckedUpdateWithoutUnits_lotInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    units_bought?: FloatFieldUpdateOperationsInput | number
    buy_nav?: FloatFieldUpdateOperationsInput | number
    allotment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type redemption_bucketUpsertWithWhereUniqueWithoutUnits_lotInput = {
    where: redemption_bucketWhereUniqueInput
    update: XOR<redemption_bucketUpdateWithoutUnits_lotInput, redemption_bucketUncheckedUpdateWithoutUnits_lotInput>
    create: XOR<redemption_bucketCreateWithoutUnits_lotInput, redemption_bucketUncheckedCreateWithoutUnits_lotInput>
  }

  export type redemption_bucketUpdateWithWhereUniqueWithoutUnits_lotInput = {
    where: redemption_bucketWhereUniqueInput
    data: XOR<redemption_bucketUpdateWithoutUnits_lotInput, redemption_bucketUncheckedUpdateWithoutUnits_lotInput>
  }

  export type redemption_bucketUpdateManyWithWhereWithoutUnits_lotInput = {
    where: redemption_bucketScalarWhereInput
    data: XOR<redemption_bucketUpdateManyMutationInput, redemption_bucketUncheckedUpdateManyWithoutUnits_lotInput>
  }

  export type redemption_bucketScalarWhereInput = {
    AND?: redemption_bucketScalarWhereInput | redemption_bucketScalarWhereInput[]
    OR?: redemption_bucketScalarWhereInput[]
    NOT?: redemption_bucketScalarWhereInput | redemption_bucketScalarWhereInput[]
    id?: StringFilter<"redemption_bucket"> | string
    redemption_transaction_id?: StringFilter<"redemption_bucket"> | string
    units_lot_id?: StringFilter<"redemption_bucket"> | string
    units_redeemed?: FloatFilter<"redemption_bucket"> | number
  }

  export type mutual_fundUpsertWithoutUnits_lotsInput = {
    update: XOR<mutual_fundUpdateWithoutUnits_lotsInput, mutual_fundUncheckedUpdateWithoutUnits_lotsInput>
    create: XOR<mutual_fundCreateWithoutUnits_lotsInput, mutual_fundUncheckedCreateWithoutUnits_lotsInput>
    where?: mutual_fundWhereInput
  }

  export type mutual_fundUpdateToOneWithWhereWithoutUnits_lotsInput = {
    where?: mutual_fundWhereInput
    data: XOR<mutual_fundUpdateWithoutUnits_lotsInput, mutual_fundUncheckedUpdateWithoutUnits_lotsInput>
  }

  export type mutual_fundUpdateWithoutUnits_lotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isin?: StringFieldUpdateOperationsInput | string
  }

  export type mutual_fundUncheckedUpdateWithoutUnits_lotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isin?: StringFieldUpdateOperationsInput | string
  }

  export type transactionCreateWithoutInvestment_transactionInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    transfer_transaction?: transfer_transactionCreateNestedOneWithoutTransactionInput
    expense_transaction?: expense_transactionCreateNestedOneWithoutTransactionInput
    income_transaction?: income_transactionCreateNestedOneWithoutTransactionInput
    redemption_transaction?: redemption_transactionCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutInvestment_transactionInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    transfer_transaction?: transfer_transactionUncheckedCreateNestedOneWithoutTransactionInput
    expense_transaction?: expense_transactionUncheckedCreateNestedOneWithoutTransactionInput
    income_transaction?: income_transactionUncheckedCreateNestedOneWithoutTransactionInput
    redemption_transaction?: redemption_transactionUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutInvestment_transactionInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutInvestment_transactionInput, transactionUncheckedCreateWithoutInvestment_transactionInput>
  }

  export type accountCreateWithoutInvestment_transactionsInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionCreateNestedManyWithoutFrom_accountInput
    to_transfers?: transfer_transactionCreateNestedManyWithoutTo_accountInput
    income_transactions?: income_transactionCreateNestedManyWithoutAccountInput
    expense_transactions?: expense_transactionCreateNestedManyWithoutAccountInput
    redemption_transactions?: redemption_transactionCreateNestedManyWithoutTo_accountInput
  }

  export type accountUncheckedCreateWithoutInvestment_transactionsInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
    to_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutTo_accountInput
    income_transactions?: income_transactionUncheckedCreateNestedManyWithoutAccountInput
    expense_transactions?: expense_transactionUncheckedCreateNestedManyWithoutAccountInput
    redemption_transactions?: redemption_transactionUncheckedCreateNestedManyWithoutTo_accountInput
  }

  export type accountCreateOrConnectWithoutInvestment_transactionsInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutInvestment_transactionsInput, accountUncheckedCreateWithoutInvestment_transactionsInput>
  }

  export type units_lotCreateWithoutInvestment_transactionInput = {
    id?: string
    redemption_buckets?: redemption_bucketCreateNestedManyWithoutUnits_lotInput
    mutual_fund: mutual_fundCreateNestedOneWithoutUnits_lotsInput
  }

  export type units_lotUncheckedCreateWithoutInvestment_transactionInput = {
    id?: string
    mutual_fund_id: string
    redemption_buckets?: redemption_bucketUncheckedCreateNestedManyWithoutUnits_lotInput
  }

  export type units_lotCreateOrConnectWithoutInvestment_transactionInput = {
    where: units_lotWhereUniqueInput
    create: XOR<units_lotCreateWithoutInvestment_transactionInput, units_lotUncheckedCreateWithoutInvestment_transactionInput>
  }

  export type transactionUpsertWithoutInvestment_transactionInput = {
    update: XOR<transactionUpdateWithoutInvestment_transactionInput, transactionUncheckedUpdateWithoutInvestment_transactionInput>
    create: XOR<transactionCreateWithoutInvestment_transactionInput, transactionUncheckedCreateWithoutInvestment_transactionInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutInvestment_transactionInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutInvestment_transactionInput, transactionUncheckedUpdateWithoutInvestment_transactionInput>
  }

  export type transactionUpdateWithoutInvestment_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transfer_transaction?: transfer_transactionUpdateOneWithoutTransactionNestedInput
    expense_transaction?: expense_transactionUpdateOneWithoutTransactionNestedInput
    income_transaction?: income_transactionUpdateOneWithoutTransactionNestedInput
    redemption_transaction?: redemption_transactionUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutInvestment_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transfer_transaction?: transfer_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    expense_transaction?: expense_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    income_transaction?: income_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    redemption_transaction?: redemption_transactionUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type accountUpsertWithoutInvestment_transactionsInput = {
    update: XOR<accountUpdateWithoutInvestment_transactionsInput, accountUncheckedUpdateWithoutInvestment_transactionsInput>
    create: XOR<accountCreateWithoutInvestment_transactionsInput, accountUncheckedCreateWithoutInvestment_transactionsInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutInvestment_transactionsInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutInvestment_transactionsInput, accountUncheckedUpdateWithoutInvestment_transactionsInput>
  }

  export type accountUpdateWithoutInvestment_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUpdateManyWithoutFrom_accountNestedInput
    to_transfers?: transfer_transactionUpdateManyWithoutTo_accountNestedInput
    income_transactions?: income_transactionUpdateManyWithoutAccountNestedInput
    expense_transactions?: expense_transactionUpdateManyWithoutAccountNestedInput
    redemption_transactions?: redemption_transactionUpdateManyWithoutTo_accountNestedInput
  }

  export type accountUncheckedUpdateWithoutInvestment_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
    to_transfers?: transfer_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
    income_transactions?: income_transactionUncheckedUpdateManyWithoutAccountNestedInput
    expense_transactions?: expense_transactionUncheckedUpdateManyWithoutAccountNestedInput
    redemption_transactions?: redemption_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
  }

  export type units_lotUpsertWithoutInvestment_transactionInput = {
    update: XOR<units_lotUpdateWithoutInvestment_transactionInput, units_lotUncheckedUpdateWithoutInvestment_transactionInput>
    create: XOR<units_lotCreateWithoutInvestment_transactionInput, units_lotUncheckedCreateWithoutInvestment_transactionInput>
    where?: units_lotWhereInput
  }

  export type units_lotUpdateToOneWithWhereWithoutInvestment_transactionInput = {
    where?: units_lotWhereInput
    data: XOR<units_lotUpdateWithoutInvestment_transactionInput, units_lotUncheckedUpdateWithoutInvestment_transactionInput>
  }

  export type units_lotUpdateWithoutInvestment_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    redemption_buckets?: redemption_bucketUpdateManyWithoutUnits_lotNestedInput
    mutual_fund?: mutual_fundUpdateOneRequiredWithoutUnits_lotsNestedInput
  }

  export type units_lotUncheckedUpdateWithoutInvestment_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutual_fund_id?: StringFieldUpdateOperationsInput | string
    redemption_buckets?: redemption_bucketUncheckedUpdateManyWithoutUnits_lotNestedInput
  }

  export type transactionCreateWithoutRedemption_transactionInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    transfer_transaction?: transfer_transactionCreateNestedOneWithoutTransactionInput
    expense_transaction?: expense_transactionCreateNestedOneWithoutTransactionInput
    income_transaction?: income_transactionCreateNestedOneWithoutTransactionInput
    investment_transaction?: investment_transactionCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutRedemption_transactionInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    transfer_transaction?: transfer_transactionUncheckedCreateNestedOneWithoutTransactionInput
    expense_transaction?: expense_transactionUncheckedCreateNestedOneWithoutTransactionInput
    income_transaction?: income_transactionUncheckedCreateNestedOneWithoutTransactionInput
    investment_transaction?: investment_transactionUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutRedemption_transactionInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutRedemption_transactionInput, transactionUncheckedCreateWithoutRedemption_transactionInput>
  }

  export type accountCreateWithoutRedemption_transactionsInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionCreateNestedManyWithoutFrom_accountInput
    to_transfers?: transfer_transactionCreateNestedManyWithoutTo_accountInput
    income_transactions?: income_transactionCreateNestedManyWithoutAccountInput
    expense_transactions?: expense_transactionCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionCreateNestedManyWithoutFrom_accountInput
  }

  export type accountUncheckedCreateWithoutRedemption_transactionsInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
    to_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutTo_accountInput
    income_transactions?: income_transactionUncheckedCreateNestedManyWithoutAccountInput
    expense_transactions?: expense_transactionUncheckedCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
  }

  export type accountCreateOrConnectWithoutRedemption_transactionsInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutRedemption_transactionsInput, accountUncheckedCreateWithoutRedemption_transactionsInput>
  }

  export type redemption_bucketCreateWithoutRedemption_transactionInput = {
    id?: string
    units_redeemed: number
    units_lot: units_lotCreateNestedOneWithoutRedemption_bucketsInput
  }

  export type redemption_bucketUncheckedCreateWithoutRedemption_transactionInput = {
    id?: string
    units_lot_id: string
    units_redeemed: number
  }

  export type redemption_bucketCreateOrConnectWithoutRedemption_transactionInput = {
    where: redemption_bucketWhereUniqueInput
    create: XOR<redemption_bucketCreateWithoutRedemption_transactionInput, redemption_bucketUncheckedCreateWithoutRedemption_transactionInput>
  }

  export type redemption_bucketCreateManyRedemption_transactionInputEnvelope = {
    data: redemption_bucketCreateManyRedemption_transactionInput | redemption_bucketCreateManyRedemption_transactionInput[]
  }

  export type transactionUpsertWithoutRedemption_transactionInput = {
    update: XOR<transactionUpdateWithoutRedemption_transactionInput, transactionUncheckedUpdateWithoutRedemption_transactionInput>
    create: XOR<transactionCreateWithoutRedemption_transactionInput, transactionUncheckedCreateWithoutRedemption_transactionInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutRedemption_transactionInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutRedemption_transactionInput, transactionUncheckedUpdateWithoutRedemption_transactionInput>
  }

  export type transactionUpdateWithoutRedemption_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transfer_transaction?: transfer_transactionUpdateOneWithoutTransactionNestedInput
    expense_transaction?: expense_transactionUpdateOneWithoutTransactionNestedInput
    income_transaction?: income_transactionUpdateOneWithoutTransactionNestedInput
    investment_transaction?: investment_transactionUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutRedemption_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transfer_transaction?: transfer_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    expense_transaction?: expense_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    income_transaction?: income_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    investment_transaction?: investment_transactionUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type accountUpsertWithoutRedemption_transactionsInput = {
    update: XOR<accountUpdateWithoutRedemption_transactionsInput, accountUncheckedUpdateWithoutRedemption_transactionsInput>
    create: XOR<accountCreateWithoutRedemption_transactionsInput, accountUncheckedCreateWithoutRedemption_transactionsInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutRedemption_transactionsInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutRedemption_transactionsInput, accountUncheckedUpdateWithoutRedemption_transactionsInput>
  }

  export type accountUpdateWithoutRedemption_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUpdateManyWithoutFrom_accountNestedInput
    to_transfers?: transfer_transactionUpdateManyWithoutTo_accountNestedInput
    income_transactions?: income_transactionUpdateManyWithoutAccountNestedInput
    expense_transactions?: expense_transactionUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUpdateManyWithoutFrom_accountNestedInput
  }

  export type accountUncheckedUpdateWithoutRedemption_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
    to_transfers?: transfer_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
    income_transactions?: income_transactionUncheckedUpdateManyWithoutAccountNestedInput
    expense_transactions?: expense_transactionUncheckedUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
  }

  export type redemption_bucketUpsertWithWhereUniqueWithoutRedemption_transactionInput = {
    where: redemption_bucketWhereUniqueInput
    update: XOR<redemption_bucketUpdateWithoutRedemption_transactionInput, redemption_bucketUncheckedUpdateWithoutRedemption_transactionInput>
    create: XOR<redemption_bucketCreateWithoutRedemption_transactionInput, redemption_bucketUncheckedCreateWithoutRedemption_transactionInput>
  }

  export type redemption_bucketUpdateWithWhereUniqueWithoutRedemption_transactionInput = {
    where: redemption_bucketWhereUniqueInput
    data: XOR<redemption_bucketUpdateWithoutRedemption_transactionInput, redemption_bucketUncheckedUpdateWithoutRedemption_transactionInput>
  }

  export type redemption_bucketUpdateManyWithWhereWithoutRedemption_transactionInput = {
    where: redemption_bucketScalarWhereInput
    data: XOR<redemption_bucketUpdateManyMutationInput, redemption_bucketUncheckedUpdateManyWithoutRedemption_transactionInput>
  }

  export type redemption_transactionCreateWithoutRedemption_bucketsInput = {
    id?: string
    sell_nav: number
    redemption_date: Date | string
    transaction: transactionCreateNestedOneWithoutRedemption_transactionInput
    to_account: accountCreateNestedOneWithoutRedemption_transactionsInput
  }

  export type redemption_transactionUncheckedCreateWithoutRedemption_bucketsInput = {
    id?: string
    to_account_id: string
    sell_nav: number
    redemption_date: Date | string
    transaction_id: string
  }

  export type redemption_transactionCreateOrConnectWithoutRedemption_bucketsInput = {
    where: redemption_transactionWhereUniqueInput
    create: XOR<redemption_transactionCreateWithoutRedemption_bucketsInput, redemption_transactionUncheckedCreateWithoutRedemption_bucketsInput>
  }

  export type units_lotCreateWithoutRedemption_bucketsInput = {
    id?: string
    investment_transaction?: investment_transactionCreateNestedOneWithoutUnits_lotInput
    mutual_fund: mutual_fundCreateNestedOneWithoutUnits_lotsInput
  }

  export type units_lotUncheckedCreateWithoutRedemption_bucketsInput = {
    id?: string
    mutual_fund_id: string
    investment_transaction?: investment_transactionUncheckedCreateNestedOneWithoutUnits_lotInput
  }

  export type units_lotCreateOrConnectWithoutRedemption_bucketsInput = {
    where: units_lotWhereUniqueInput
    create: XOR<units_lotCreateWithoutRedemption_bucketsInput, units_lotUncheckedCreateWithoutRedemption_bucketsInput>
  }

  export type redemption_transactionUpsertWithoutRedemption_bucketsInput = {
    update: XOR<redemption_transactionUpdateWithoutRedemption_bucketsInput, redemption_transactionUncheckedUpdateWithoutRedemption_bucketsInput>
    create: XOR<redemption_transactionCreateWithoutRedemption_bucketsInput, redemption_transactionUncheckedCreateWithoutRedemption_bucketsInput>
    where?: redemption_transactionWhereInput
  }

  export type redemption_transactionUpdateToOneWithWhereWithoutRedemption_bucketsInput = {
    where?: redemption_transactionWhereInput
    data: XOR<redemption_transactionUpdateWithoutRedemption_bucketsInput, redemption_transactionUncheckedUpdateWithoutRedemption_bucketsInput>
  }

  export type redemption_transactionUpdateWithoutRedemption_bucketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sell_nav?: FloatFieldUpdateOperationsInput | number
    redemption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: transactionUpdateOneRequiredWithoutRedemption_transactionNestedInput
    to_account?: accountUpdateOneRequiredWithoutRedemption_transactionsNestedInput
  }

  export type redemption_transactionUncheckedUpdateWithoutRedemption_bucketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    sell_nav?: FloatFieldUpdateOperationsInput | number
    redemption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type units_lotUpsertWithoutRedemption_bucketsInput = {
    update: XOR<units_lotUpdateWithoutRedemption_bucketsInput, units_lotUncheckedUpdateWithoutRedemption_bucketsInput>
    create: XOR<units_lotCreateWithoutRedemption_bucketsInput, units_lotUncheckedCreateWithoutRedemption_bucketsInput>
    where?: units_lotWhereInput
  }

  export type units_lotUpdateToOneWithWhereWithoutRedemption_bucketsInput = {
    where?: units_lotWhereInput
    data: XOR<units_lotUpdateWithoutRedemption_bucketsInput, units_lotUncheckedUpdateWithoutRedemption_bucketsInput>
  }

  export type units_lotUpdateWithoutRedemption_bucketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    investment_transaction?: investment_transactionUpdateOneWithoutUnits_lotNestedInput
    mutual_fund?: mutual_fundUpdateOneRequiredWithoutUnits_lotsNestedInput
  }

  export type units_lotUncheckedUpdateWithoutRedemption_bucketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutual_fund_id?: StringFieldUpdateOperationsInput | string
    investment_transaction?: investment_transactionUncheckedUpdateOneWithoutUnits_lotNestedInput
  }

  export type transfer_transactionCreateWithoutTransactionInput = {
    id?: string
    from_account: accountCreateNestedOneWithoutFrom_transfersInput
    to_account: accountCreateNestedOneWithoutTo_transfersInput
  }

  export type transfer_transactionUncheckedCreateWithoutTransactionInput = {
    id?: string
    from_account_id: string
    to_account_id: string
  }

  export type transfer_transactionCreateOrConnectWithoutTransactionInput = {
    where: transfer_transactionWhereUniqueInput
    create: XOR<transfer_transactionCreateWithoutTransactionInput, transfer_transactionUncheckedCreateWithoutTransactionInput>
  }

  export type expense_transactionCreateWithoutTransactionInput = {
    id?: string
    account: accountCreateNestedOneWithoutExpense_transactionsInput
    expense_item: expense_itemCreateNestedOneWithoutTransactionsInput
  }

  export type expense_transactionUncheckedCreateWithoutTransactionInput = {
    id?: string
    account_id: string
    expense_item_id: string
  }

  export type expense_transactionCreateOrConnectWithoutTransactionInput = {
    where: expense_transactionWhereUniqueInput
    create: XOR<expense_transactionCreateWithoutTransactionInput, expense_transactionUncheckedCreateWithoutTransactionInput>
  }

  export type income_transactionCreateWithoutTransactionInput = {
    id?: string
    income_source: income_sourceCreateNestedOneWithoutTransactionsInput
    account: accountCreateNestedOneWithoutIncome_transactionsInput
  }

  export type income_transactionUncheckedCreateWithoutTransactionInput = {
    id?: string
    income_source_id: string
    account_id: string
  }

  export type income_transactionCreateOrConnectWithoutTransactionInput = {
    where: income_transactionWhereUniqueInput
    create: XOR<income_transactionCreateWithoutTransactionInput, income_transactionUncheckedCreateWithoutTransactionInput>
  }

  export type investment_transactionCreateWithoutTransactionInput = {
    id?: string
    units_bought: number
    buy_nav: number
    allotment_date: Date | string
    from_account: accountCreateNestedOneWithoutInvestment_transactionsInput
    units_lot: units_lotCreateNestedOneWithoutInvestment_transactionInput
  }

  export type investment_transactionUncheckedCreateWithoutTransactionInput = {
    id?: string
    from_account_id: string
    units_bought: number
    buy_nav: number
    allotment_date: Date | string
    units_lot_id: string
  }

  export type investment_transactionCreateOrConnectWithoutTransactionInput = {
    where: investment_transactionWhereUniqueInput
    create: XOR<investment_transactionCreateWithoutTransactionInput, investment_transactionUncheckedCreateWithoutTransactionInput>
  }

  export type redemption_transactionCreateWithoutTransactionInput = {
    id?: string
    sell_nav: number
    redemption_date: Date | string
    to_account: accountCreateNestedOneWithoutRedemption_transactionsInput
    redemption_buckets?: redemption_bucketCreateNestedManyWithoutRedemption_transactionInput
  }

  export type redemption_transactionUncheckedCreateWithoutTransactionInput = {
    id?: string
    to_account_id: string
    sell_nav: number
    redemption_date: Date | string
    redemption_buckets?: redemption_bucketUncheckedCreateNestedManyWithoutRedemption_transactionInput
  }

  export type redemption_transactionCreateOrConnectWithoutTransactionInput = {
    where: redemption_transactionWhereUniqueInput
    create: XOR<redemption_transactionCreateWithoutTransactionInput, redemption_transactionUncheckedCreateWithoutTransactionInput>
  }

  export type transfer_transactionUpsertWithoutTransactionInput = {
    update: XOR<transfer_transactionUpdateWithoutTransactionInput, transfer_transactionUncheckedUpdateWithoutTransactionInput>
    create: XOR<transfer_transactionCreateWithoutTransactionInput, transfer_transactionUncheckedCreateWithoutTransactionInput>
    where?: transfer_transactionWhereInput
  }

  export type transfer_transactionUpdateToOneWithWhereWithoutTransactionInput = {
    where?: transfer_transactionWhereInput
    data: XOR<transfer_transactionUpdateWithoutTransactionInput, transfer_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type transfer_transactionUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account?: accountUpdateOneRequiredWithoutFrom_transfersNestedInput
    to_account?: accountUpdateOneRequiredWithoutTo_transfersNestedInput
  }

  export type transfer_transactionUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
  }

  export type expense_transactionUpsertWithoutTransactionInput = {
    update: XOR<expense_transactionUpdateWithoutTransactionInput, expense_transactionUncheckedUpdateWithoutTransactionInput>
    create: XOR<expense_transactionCreateWithoutTransactionInput, expense_transactionUncheckedCreateWithoutTransactionInput>
    where?: expense_transactionWhereInput
  }

  export type expense_transactionUpdateToOneWithWhereWithoutTransactionInput = {
    where?: expense_transactionWhereInput
    data: XOR<expense_transactionUpdateWithoutTransactionInput, expense_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type expense_transactionUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    account?: accountUpdateOneRequiredWithoutExpense_transactionsNestedInput
    expense_item?: expense_itemUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type expense_transactionUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    expense_item_id?: StringFieldUpdateOperationsInput | string
  }

  export type income_transactionUpsertWithoutTransactionInput = {
    update: XOR<income_transactionUpdateWithoutTransactionInput, income_transactionUncheckedUpdateWithoutTransactionInput>
    create: XOR<income_transactionCreateWithoutTransactionInput, income_transactionUncheckedCreateWithoutTransactionInput>
    where?: income_transactionWhereInput
  }

  export type income_transactionUpdateToOneWithWhereWithoutTransactionInput = {
    where?: income_transactionWhereInput
    data: XOR<income_transactionUpdateWithoutTransactionInput, income_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type income_transactionUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    income_source?: income_sourceUpdateOneRequiredWithoutTransactionsNestedInput
    account?: accountUpdateOneRequiredWithoutIncome_transactionsNestedInput
  }

  export type income_transactionUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    income_source_id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
  }

  export type investment_transactionUpsertWithoutTransactionInput = {
    update: XOR<investment_transactionUpdateWithoutTransactionInput, investment_transactionUncheckedUpdateWithoutTransactionInput>
    create: XOR<investment_transactionCreateWithoutTransactionInput, investment_transactionUncheckedCreateWithoutTransactionInput>
    where?: investment_transactionWhereInput
  }

  export type investment_transactionUpdateToOneWithWhereWithoutTransactionInput = {
    where?: investment_transactionWhereInput
    data: XOR<investment_transactionUpdateWithoutTransactionInput, investment_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type investment_transactionUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_bought?: FloatFieldUpdateOperationsInput | number
    buy_nav?: FloatFieldUpdateOperationsInput | number
    allotment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    from_account?: accountUpdateOneRequiredWithoutInvestment_transactionsNestedInput
    units_lot?: units_lotUpdateOneRequiredWithoutInvestment_transactionNestedInput
  }

  export type investment_transactionUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    units_bought?: FloatFieldUpdateOperationsInput | number
    buy_nav?: FloatFieldUpdateOperationsInput | number
    allotment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    units_lot_id?: StringFieldUpdateOperationsInput | string
  }

  export type redemption_transactionUpsertWithoutTransactionInput = {
    update: XOR<redemption_transactionUpdateWithoutTransactionInput, redemption_transactionUncheckedUpdateWithoutTransactionInput>
    create: XOR<redemption_transactionCreateWithoutTransactionInput, redemption_transactionUncheckedCreateWithoutTransactionInput>
    where?: redemption_transactionWhereInput
  }

  export type redemption_transactionUpdateToOneWithWhereWithoutTransactionInput = {
    where?: redemption_transactionWhereInput
    data: XOR<redemption_transactionUpdateWithoutTransactionInput, redemption_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type redemption_transactionUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sell_nav?: FloatFieldUpdateOperationsInput | number
    redemption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_account?: accountUpdateOneRequiredWithoutRedemption_transactionsNestedInput
    redemption_buckets?: redemption_bucketUpdateManyWithoutRedemption_transactionNestedInput
  }

  export type redemption_transactionUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    sell_nav?: FloatFieldUpdateOperationsInput | number
    redemption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    redemption_buckets?: redemption_bucketUncheckedUpdateManyWithoutRedemption_transactionNestedInput
  }

  export type transactionCreateWithoutTransfer_transactionInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    expense_transaction?: expense_transactionCreateNestedOneWithoutTransactionInput
    income_transaction?: income_transactionCreateNestedOneWithoutTransactionInput
    investment_transaction?: investment_transactionCreateNestedOneWithoutTransactionInput
    redemption_transaction?: redemption_transactionCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutTransfer_transactionInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    expense_transaction?: expense_transactionUncheckedCreateNestedOneWithoutTransactionInput
    income_transaction?: income_transactionUncheckedCreateNestedOneWithoutTransactionInput
    investment_transaction?: investment_transactionUncheckedCreateNestedOneWithoutTransactionInput
    redemption_transaction?: redemption_transactionUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutTransfer_transactionInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutTransfer_transactionInput, transactionUncheckedCreateWithoutTransfer_transactionInput>
  }

  export type accountCreateWithoutFrom_transfersInput = {
    id?: string
    name: string
    group: string
    to_transfers?: transfer_transactionCreateNestedManyWithoutTo_accountInput
    income_transactions?: income_transactionCreateNestedManyWithoutAccountInput
    expense_transactions?: expense_transactionCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionCreateNestedManyWithoutFrom_accountInput
    redemption_transactions?: redemption_transactionCreateNestedManyWithoutTo_accountInput
  }

  export type accountUncheckedCreateWithoutFrom_transfersInput = {
    id?: string
    name: string
    group: string
    to_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutTo_accountInput
    income_transactions?: income_transactionUncheckedCreateNestedManyWithoutAccountInput
    expense_transactions?: expense_transactionUncheckedCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
    redemption_transactions?: redemption_transactionUncheckedCreateNestedManyWithoutTo_accountInput
  }

  export type accountCreateOrConnectWithoutFrom_transfersInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutFrom_transfersInput, accountUncheckedCreateWithoutFrom_transfersInput>
  }

  export type accountCreateWithoutTo_transfersInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionCreateNestedManyWithoutFrom_accountInput
    income_transactions?: income_transactionCreateNestedManyWithoutAccountInput
    expense_transactions?: expense_transactionCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionCreateNestedManyWithoutFrom_accountInput
    redemption_transactions?: redemption_transactionCreateNestedManyWithoutTo_accountInput
  }

  export type accountUncheckedCreateWithoutTo_transfersInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
    income_transactions?: income_transactionUncheckedCreateNestedManyWithoutAccountInput
    expense_transactions?: expense_transactionUncheckedCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
    redemption_transactions?: redemption_transactionUncheckedCreateNestedManyWithoutTo_accountInput
  }

  export type accountCreateOrConnectWithoutTo_transfersInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutTo_transfersInput, accountUncheckedCreateWithoutTo_transfersInput>
  }

  export type transactionUpsertWithoutTransfer_transactionInput = {
    update: XOR<transactionUpdateWithoutTransfer_transactionInput, transactionUncheckedUpdateWithoutTransfer_transactionInput>
    create: XOR<transactionCreateWithoutTransfer_transactionInput, transactionUncheckedCreateWithoutTransfer_transactionInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutTransfer_transactionInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutTransfer_transactionInput, transactionUncheckedUpdateWithoutTransfer_transactionInput>
  }

  export type transactionUpdateWithoutTransfer_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    expense_transaction?: expense_transactionUpdateOneWithoutTransactionNestedInput
    income_transaction?: income_transactionUpdateOneWithoutTransactionNestedInput
    investment_transaction?: investment_transactionUpdateOneWithoutTransactionNestedInput
    redemption_transaction?: redemption_transactionUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutTransfer_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    expense_transaction?: expense_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    income_transaction?: income_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    investment_transaction?: investment_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    redemption_transaction?: redemption_transactionUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type accountUpsertWithoutFrom_transfersInput = {
    update: XOR<accountUpdateWithoutFrom_transfersInput, accountUncheckedUpdateWithoutFrom_transfersInput>
    create: XOR<accountCreateWithoutFrom_transfersInput, accountUncheckedCreateWithoutFrom_transfersInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutFrom_transfersInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutFrom_transfersInput, accountUncheckedUpdateWithoutFrom_transfersInput>
  }

  export type accountUpdateWithoutFrom_transfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    to_transfers?: transfer_transactionUpdateManyWithoutTo_accountNestedInput
    income_transactions?: income_transactionUpdateManyWithoutAccountNestedInput
    expense_transactions?: expense_transactionUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUpdateManyWithoutFrom_accountNestedInput
    redemption_transactions?: redemption_transactionUpdateManyWithoutTo_accountNestedInput
  }

  export type accountUncheckedUpdateWithoutFrom_transfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    to_transfers?: transfer_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
    income_transactions?: income_transactionUncheckedUpdateManyWithoutAccountNestedInput
    expense_transactions?: expense_transactionUncheckedUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
    redemption_transactions?: redemption_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
  }

  export type accountUpsertWithoutTo_transfersInput = {
    update: XOR<accountUpdateWithoutTo_transfersInput, accountUncheckedUpdateWithoutTo_transfersInput>
    create: XOR<accountCreateWithoutTo_transfersInput, accountUncheckedCreateWithoutTo_transfersInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutTo_transfersInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutTo_transfersInput, accountUncheckedUpdateWithoutTo_transfersInput>
  }

  export type accountUpdateWithoutTo_transfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUpdateManyWithoutFrom_accountNestedInput
    income_transactions?: income_transactionUpdateManyWithoutAccountNestedInput
    expense_transactions?: expense_transactionUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUpdateManyWithoutFrom_accountNestedInput
    redemption_transactions?: redemption_transactionUpdateManyWithoutTo_accountNestedInput
  }

  export type accountUncheckedUpdateWithoutTo_transfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
    income_transactions?: income_transactionUncheckedUpdateManyWithoutAccountNestedInput
    expense_transactions?: expense_transactionUncheckedUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
    redemption_transactions?: redemption_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
  }

  export type transactionCreateWithoutExpense_transactionInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    transfer_transaction?: transfer_transactionCreateNestedOneWithoutTransactionInput
    income_transaction?: income_transactionCreateNestedOneWithoutTransactionInput
    investment_transaction?: investment_transactionCreateNestedOneWithoutTransactionInput
    redemption_transaction?: redemption_transactionCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutExpense_transactionInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    transfer_transaction?: transfer_transactionUncheckedCreateNestedOneWithoutTransactionInput
    income_transaction?: income_transactionUncheckedCreateNestedOneWithoutTransactionInput
    investment_transaction?: investment_transactionUncheckedCreateNestedOneWithoutTransactionInput
    redemption_transaction?: redemption_transactionUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutExpense_transactionInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutExpense_transactionInput, transactionUncheckedCreateWithoutExpense_transactionInput>
  }

  export type accountCreateWithoutExpense_transactionsInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionCreateNestedManyWithoutFrom_accountInput
    to_transfers?: transfer_transactionCreateNestedManyWithoutTo_accountInput
    income_transactions?: income_transactionCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionCreateNestedManyWithoutFrom_accountInput
    redemption_transactions?: redemption_transactionCreateNestedManyWithoutTo_accountInput
  }

  export type accountUncheckedCreateWithoutExpense_transactionsInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
    to_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutTo_accountInput
    income_transactions?: income_transactionUncheckedCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
    redemption_transactions?: redemption_transactionUncheckedCreateNestedManyWithoutTo_accountInput
  }

  export type accountCreateOrConnectWithoutExpense_transactionsInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutExpense_transactionsInput, accountUncheckedCreateWithoutExpense_transactionsInput>
  }

  export type expense_itemCreateWithoutTransactionsInput = {
    id?: string
    name: string
    group: string
  }

  export type expense_itemUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    group: string
  }

  export type expense_itemCreateOrConnectWithoutTransactionsInput = {
    where: expense_itemWhereUniqueInput
    create: XOR<expense_itemCreateWithoutTransactionsInput, expense_itemUncheckedCreateWithoutTransactionsInput>
  }

  export type transactionUpsertWithoutExpense_transactionInput = {
    update: XOR<transactionUpdateWithoutExpense_transactionInput, transactionUncheckedUpdateWithoutExpense_transactionInput>
    create: XOR<transactionCreateWithoutExpense_transactionInput, transactionUncheckedCreateWithoutExpense_transactionInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutExpense_transactionInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutExpense_transactionInput, transactionUncheckedUpdateWithoutExpense_transactionInput>
  }

  export type transactionUpdateWithoutExpense_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transfer_transaction?: transfer_transactionUpdateOneWithoutTransactionNestedInput
    income_transaction?: income_transactionUpdateOneWithoutTransactionNestedInput
    investment_transaction?: investment_transactionUpdateOneWithoutTransactionNestedInput
    redemption_transaction?: redemption_transactionUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutExpense_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transfer_transaction?: transfer_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    income_transaction?: income_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    investment_transaction?: investment_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    redemption_transaction?: redemption_transactionUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type accountUpsertWithoutExpense_transactionsInput = {
    update: XOR<accountUpdateWithoutExpense_transactionsInput, accountUncheckedUpdateWithoutExpense_transactionsInput>
    create: XOR<accountCreateWithoutExpense_transactionsInput, accountUncheckedCreateWithoutExpense_transactionsInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutExpense_transactionsInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutExpense_transactionsInput, accountUncheckedUpdateWithoutExpense_transactionsInput>
  }

  export type accountUpdateWithoutExpense_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUpdateManyWithoutFrom_accountNestedInput
    to_transfers?: transfer_transactionUpdateManyWithoutTo_accountNestedInput
    income_transactions?: income_transactionUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUpdateManyWithoutFrom_accountNestedInput
    redemption_transactions?: redemption_transactionUpdateManyWithoutTo_accountNestedInput
  }

  export type accountUncheckedUpdateWithoutExpense_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
    to_transfers?: transfer_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
    income_transactions?: income_transactionUncheckedUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
    redemption_transactions?: redemption_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
  }

  export type expense_itemUpsertWithoutTransactionsInput = {
    update: XOR<expense_itemUpdateWithoutTransactionsInput, expense_itemUncheckedUpdateWithoutTransactionsInput>
    create: XOR<expense_itemCreateWithoutTransactionsInput, expense_itemUncheckedCreateWithoutTransactionsInput>
    where?: expense_itemWhereInput
  }

  export type expense_itemUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: expense_itemWhereInput
    data: XOR<expense_itemUpdateWithoutTransactionsInput, expense_itemUncheckedUpdateWithoutTransactionsInput>
  }

  export type expense_itemUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
  }

  export type expense_itemUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
  }

  export type transactionCreateWithoutIncome_transactionInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    transfer_transaction?: transfer_transactionCreateNestedOneWithoutTransactionInput
    expense_transaction?: expense_transactionCreateNestedOneWithoutTransactionInput
    investment_transaction?: investment_transactionCreateNestedOneWithoutTransactionInput
    redemption_transaction?: redemption_transactionCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutIncome_transactionInput = {
    id?: string
    created_at?: Date | string
    date: Date | string
    time?: Date | string | null
    amount: number
    type: $Enums.transaction_type
    note?: string | null
    transfer_transaction?: transfer_transactionUncheckedCreateNestedOneWithoutTransactionInput
    expense_transaction?: expense_transactionUncheckedCreateNestedOneWithoutTransactionInput
    investment_transaction?: investment_transactionUncheckedCreateNestedOneWithoutTransactionInput
    redemption_transaction?: redemption_transactionUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutIncome_transactionInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutIncome_transactionInput, transactionUncheckedCreateWithoutIncome_transactionInput>
  }

  export type income_sourceCreateWithoutTransactionsInput = {
    id?: string
    name: string
    group: string
  }

  export type income_sourceUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    group: string
  }

  export type income_sourceCreateOrConnectWithoutTransactionsInput = {
    where: income_sourceWhereUniqueInput
    create: XOR<income_sourceCreateWithoutTransactionsInput, income_sourceUncheckedCreateWithoutTransactionsInput>
  }

  export type accountCreateWithoutIncome_transactionsInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionCreateNestedManyWithoutFrom_accountInput
    to_transfers?: transfer_transactionCreateNestedManyWithoutTo_accountInput
    expense_transactions?: expense_transactionCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionCreateNestedManyWithoutFrom_accountInput
    redemption_transactions?: redemption_transactionCreateNestedManyWithoutTo_accountInput
  }

  export type accountUncheckedCreateWithoutIncome_transactionsInput = {
    id?: string
    name: string
    group: string
    from_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
    to_transfers?: transfer_transactionUncheckedCreateNestedManyWithoutTo_accountInput
    expense_transactions?: expense_transactionUncheckedCreateNestedManyWithoutAccountInput
    investment_transactions?: investment_transactionUncheckedCreateNestedManyWithoutFrom_accountInput
    redemption_transactions?: redemption_transactionUncheckedCreateNestedManyWithoutTo_accountInput
  }

  export type accountCreateOrConnectWithoutIncome_transactionsInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutIncome_transactionsInput, accountUncheckedCreateWithoutIncome_transactionsInput>
  }

  export type transactionUpsertWithoutIncome_transactionInput = {
    update: XOR<transactionUpdateWithoutIncome_transactionInput, transactionUncheckedUpdateWithoutIncome_transactionInput>
    create: XOR<transactionCreateWithoutIncome_transactionInput, transactionUncheckedCreateWithoutIncome_transactionInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutIncome_transactionInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutIncome_transactionInput, transactionUncheckedUpdateWithoutIncome_transactionInput>
  }

  export type transactionUpdateWithoutIncome_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transfer_transaction?: transfer_transactionUpdateOneWithoutTransactionNestedInput
    expense_transaction?: expense_transactionUpdateOneWithoutTransactionNestedInput
    investment_transaction?: investment_transactionUpdateOneWithoutTransactionNestedInput
    redemption_transaction?: redemption_transactionUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutIncome_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transfer_transaction?: transfer_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    expense_transaction?: expense_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    investment_transaction?: investment_transactionUncheckedUpdateOneWithoutTransactionNestedInput
    redemption_transaction?: redemption_transactionUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type income_sourceUpsertWithoutTransactionsInput = {
    update: XOR<income_sourceUpdateWithoutTransactionsInput, income_sourceUncheckedUpdateWithoutTransactionsInput>
    create: XOR<income_sourceCreateWithoutTransactionsInput, income_sourceUncheckedCreateWithoutTransactionsInput>
    where?: income_sourceWhereInput
  }

  export type income_sourceUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: income_sourceWhereInput
    data: XOR<income_sourceUpdateWithoutTransactionsInput, income_sourceUncheckedUpdateWithoutTransactionsInput>
  }

  export type income_sourceUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
  }

  export type income_sourceUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
  }

  export type accountUpsertWithoutIncome_transactionsInput = {
    update: XOR<accountUpdateWithoutIncome_transactionsInput, accountUncheckedUpdateWithoutIncome_transactionsInput>
    create: XOR<accountCreateWithoutIncome_transactionsInput, accountUncheckedCreateWithoutIncome_transactionsInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutIncome_transactionsInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutIncome_transactionsInput, accountUncheckedUpdateWithoutIncome_transactionsInput>
  }

  export type accountUpdateWithoutIncome_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUpdateManyWithoutFrom_accountNestedInput
    to_transfers?: transfer_transactionUpdateManyWithoutTo_accountNestedInput
    expense_transactions?: expense_transactionUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUpdateManyWithoutFrom_accountNestedInput
    redemption_transactions?: redemption_transactionUpdateManyWithoutTo_accountNestedInput
  }

  export type accountUncheckedUpdateWithoutIncome_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    from_transfers?: transfer_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
    to_transfers?: transfer_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
    expense_transactions?: expense_transactionUncheckedUpdateManyWithoutAccountNestedInput
    investment_transactions?: investment_transactionUncheckedUpdateManyWithoutFrom_accountNestedInput
    redemption_transactions?: redemption_transactionUncheckedUpdateManyWithoutTo_accountNestedInput
  }

  export type transfer_transactionCreateManyFrom_accountInput = {
    id?: string
    to_account_id: string
    transaction_id: string
  }

  export type transfer_transactionCreateManyTo_accountInput = {
    id?: string
    from_account_id: string
    transaction_id: string
  }

  export type income_transactionCreateManyAccountInput = {
    id?: string
    income_source_id: string
    transaction_id: string
  }

  export type expense_transactionCreateManyAccountInput = {
    id?: string
    expense_item_id: string
    transaction_id: string
  }

  export type investment_transactionCreateManyFrom_accountInput = {
    id?: string
    units_bought: number
    buy_nav: number
    allotment_date: Date | string
    units_lot_id: string
    transaction_id: string
  }

  export type redemption_transactionCreateManyTo_accountInput = {
    id?: string
    sell_nav: number
    redemption_date: Date | string
    transaction_id: string
  }

  export type transfer_transactionUpdateWithoutFrom_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUpdateOneRequiredWithoutTransfer_transactionNestedInput
    to_account?: accountUpdateOneRequiredWithoutTo_transfersNestedInput
  }

  export type transfer_transactionUncheckedUpdateWithoutFrom_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type transfer_transactionUncheckedUpdateManyWithoutFrom_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type transfer_transactionUpdateWithoutTo_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUpdateOneRequiredWithoutTransfer_transactionNestedInput
    from_account?: accountUpdateOneRequiredWithoutFrom_transfersNestedInput
  }

  export type transfer_transactionUncheckedUpdateWithoutTo_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type transfer_transactionUncheckedUpdateManyWithoutTo_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type income_transactionUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUpdateOneRequiredWithoutIncome_transactionNestedInput
    income_source?: income_sourceUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type income_transactionUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    income_source_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type income_transactionUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    income_source_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type expense_transactionUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUpdateOneRequiredWithoutExpense_transactionNestedInput
    expense_item?: expense_itemUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type expense_transactionUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    expense_item_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type expense_transactionUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    expense_item_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type investment_transactionUpdateWithoutFrom_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_bought?: FloatFieldUpdateOperationsInput | number
    buy_nav?: FloatFieldUpdateOperationsInput | number
    allotment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: transactionUpdateOneRequiredWithoutInvestment_transactionNestedInput
    units_lot?: units_lotUpdateOneRequiredWithoutInvestment_transactionNestedInput
  }

  export type investment_transactionUncheckedUpdateWithoutFrom_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_bought?: FloatFieldUpdateOperationsInput | number
    buy_nav?: FloatFieldUpdateOperationsInput | number
    allotment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    units_lot_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type investment_transactionUncheckedUpdateManyWithoutFrom_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_bought?: FloatFieldUpdateOperationsInput | number
    buy_nav?: FloatFieldUpdateOperationsInput | number
    allotment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    units_lot_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type redemption_transactionUpdateWithoutTo_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    sell_nav?: FloatFieldUpdateOperationsInput | number
    redemption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: transactionUpdateOneRequiredWithoutRedemption_transactionNestedInput
    redemption_buckets?: redemption_bucketUpdateManyWithoutRedemption_transactionNestedInput
  }

  export type redemption_transactionUncheckedUpdateWithoutTo_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    sell_nav?: FloatFieldUpdateOperationsInput | number
    redemption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    redemption_buckets?: redemption_bucketUncheckedUpdateManyWithoutRedemption_transactionNestedInput
  }

  export type redemption_transactionUncheckedUpdateManyWithoutTo_accountInput = {
    id?: StringFieldUpdateOperationsInput | string
    sell_nav?: FloatFieldUpdateOperationsInput | number
    redemption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type income_transactionCreateManyIncome_sourceInput = {
    id?: string
    account_id: string
    transaction_id: string
  }

  export type income_transactionUpdateWithoutIncome_sourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUpdateOneRequiredWithoutIncome_transactionNestedInput
    account?: accountUpdateOneRequiredWithoutIncome_transactionsNestedInput
  }

  export type income_transactionUncheckedUpdateWithoutIncome_sourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type income_transactionUncheckedUpdateManyWithoutIncome_sourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type expense_transactionCreateManyExpense_itemInput = {
    id?: string
    account_id: string
    transaction_id: string
  }

  export type expense_transactionUpdateWithoutExpense_itemInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUpdateOneRequiredWithoutExpense_transactionNestedInput
    account?: accountUpdateOneRequiredWithoutExpense_transactionsNestedInput
  }

  export type expense_transactionUncheckedUpdateWithoutExpense_itemInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type expense_transactionUncheckedUpdateManyWithoutExpense_itemInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
  }

  export type units_lotCreateManyMutual_fundInput = {
    id?: string
  }

  export type units_lotUpdateWithoutMutual_fundInput = {
    id?: StringFieldUpdateOperationsInput | string
    investment_transaction?: investment_transactionUpdateOneWithoutUnits_lotNestedInput
    redemption_buckets?: redemption_bucketUpdateManyWithoutUnits_lotNestedInput
  }

  export type units_lotUncheckedUpdateWithoutMutual_fundInput = {
    id?: StringFieldUpdateOperationsInput | string
    investment_transaction?: investment_transactionUncheckedUpdateOneWithoutUnits_lotNestedInput
    redemption_buckets?: redemption_bucketUncheckedUpdateManyWithoutUnits_lotNestedInput
  }

  export type units_lotUncheckedUpdateManyWithoutMutual_fundInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type redemption_bucketCreateManyUnits_lotInput = {
    id?: string
    redemption_transaction_id: string
    units_redeemed: number
  }

  export type redemption_bucketUpdateWithoutUnits_lotInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_redeemed?: FloatFieldUpdateOperationsInput | number
    redemption_transaction?: redemption_transactionUpdateOneRequiredWithoutRedemption_bucketsNestedInput
  }

  export type redemption_bucketUncheckedUpdateWithoutUnits_lotInput = {
    id?: StringFieldUpdateOperationsInput | string
    redemption_transaction_id?: StringFieldUpdateOperationsInput | string
    units_redeemed?: FloatFieldUpdateOperationsInput | number
  }

  export type redemption_bucketUncheckedUpdateManyWithoutUnits_lotInput = {
    id?: StringFieldUpdateOperationsInput | string
    redemption_transaction_id?: StringFieldUpdateOperationsInput | string
    units_redeemed?: FloatFieldUpdateOperationsInput | number
  }

  export type redemption_bucketCreateManyRedemption_transactionInput = {
    id?: string
    units_lot_id: string
    units_redeemed: number
  }

  export type redemption_bucketUpdateWithoutRedemption_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_redeemed?: FloatFieldUpdateOperationsInput | number
    units_lot?: units_lotUpdateOneRequiredWithoutRedemption_bucketsNestedInput
  }

  export type redemption_bucketUncheckedUpdateWithoutRedemption_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_lot_id?: StringFieldUpdateOperationsInput | string
    units_redeemed?: FloatFieldUpdateOperationsInput | number
  }

  export type redemption_bucketUncheckedUpdateManyWithoutRedemption_transactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    units_lot_id?: StringFieldUpdateOperationsInput | string
    units_redeemed?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}