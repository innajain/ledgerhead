import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Clear existing data (optional - remove if you want to keep existing data)
  await prisma.redemption_bucket.deleteMany()
  await prisma.redemption_transaction.deleteMany()
  await prisma.investment_transaction.deleteMany()
  await prisma.mutual_fund_units_lot.deleteMany()
  await prisma.mutual_fund.deleteMany()
  await prisma.transfer_transaction.deleteMany()
  await prisma.expense_transaction.deleteMany()
  await prisma.income_transaction.deleteMany()
  await prisma.transaction.deleteMany()
  await prisma.account.deleteMany()
  await prisma.income_source.deleteMany()
  await prisma.expense_item.deleteMany()

  // 1. Create Accounts
  const savingsAccount = await prisma.account.create({
    data: {
      name: 'Primary Savings',
      group: 'Bank Accounts'
    }
  })

  const checkingAccount = await prisma.account.create({
    data: {
      name: 'Daily Checking',
      group: 'Bank Accounts'
    }
  })

  const investmentAccount = await prisma.account.create({
    data: {
      name: 'Investment Portfolio',
      group: 'Investment Accounts'
    }
  })

  const creditCard = await prisma.account.create({
    data: {
      name: 'Primary Credit Card',
      group: 'Credit Cards'
    }
  })

  console.log('✅ Created accounts')

  // 2. Create Income Sources
  const salary = await prisma.income_source.create({
    data: {
      name: 'Monthly Salary',
      group: 'Employment'
    }
  })

  const freelance = await prisma.income_source.create({
    data: {
      name: 'Freelance Work',
      group: 'Side Income'
    }
  })

  const dividends = await prisma.income_source.create({
    data: {
      name: 'Stock Dividends',
      group: 'Investment Income'
    }
  })

  console.log('✅ Created income sources')

  // 3. Create Expense Items
  const groceries = await prisma.expense_item.create({
    data: {
      name: 'Groceries',
      group: 'Food & Dining'
    }
  })

  const rent = await prisma.expense_item.create({
    data: {
      name: 'Monthly Rent',
      group: 'Housing'
    }
  })

  const utilities = await prisma.expense_item.create({
    data: {
      name: 'Electricity Bill',
      group: 'Utilities'
    }
  })

  const entertainment = await prisma.expense_item.create({
    data: {
      name: 'Movies & Entertainment',
      group: 'Entertainment'
    }
  })

  console.log('✅ Created expense items')

  // 4. Create Mutual Funds
  const equityFund = await prisma.mutual_fund.create({
    data: {
      name: 'ABC Large Cap Equity Fund'
    }
  })

  const debtFund = await prisma.mutual_fund.create({
    data: {
      name: 'XYZ Debt Fund'
    }
  })

  console.log('✅ Created mutual funds')

  // 5. Create Income Transactions
  const salaryTransaction = await prisma.transaction.create({
    data: {
      date: new Date('2024-01-01'),
      time: new Date('2024-01-01T09:00:00'),
      amount: 75000,
      type: 'INCOME',
      note: 'January salary',
      income_transaction: {
        create: {
          income_source_id: salary.id,
          account_id: savingsAccount.id
        }
      }
    }
  })

  const freelanceTransaction = await prisma.transaction.create({
    data: {
      date: new Date('2024-01-15'),
      amount: 25000,
      type: 'INCOME',
      note: 'Website development project',
      income_transaction: {
        create: {
          income_source_id: freelance.id,
          account_id: checkingAccount.id
        }
      }
    }
  })

  console.log('✅ Created income transactions')

  // 6. Create Expense Transactions
  const rentTransaction = await prisma.transaction.create({
    data: {
      date: new Date('2024-01-05'),
      amount: 20000,
      type: 'EXPENSE',
      note: 'January rent payment',
      expense_transaction: {
        create: {
          account_id: savingsAccount.id,
          expense_item_id: rent.id
        }
      }
    }
  })

  const groceryTransaction = await prisma.transaction.create({
    data: {
      date: new Date('2024-01-10'),
      amount: 3500,
      type: 'EXPENSE',
      note: 'Weekly grocery shopping',
      expense_transaction: {
        create: {
          account_id: checkingAccount.id,
          expense_item_id: groceries.id
        }
      }
    }
  })

  const utilitiesTransaction = await prisma.transaction.create({
    data: {
      date: new Date('2024-01-12'),
      amount: 2800,
      type: 'EXPENSE',
      note: 'Monthly electricity bill',
      expense_transaction: {
        create: {
          account_id: creditCard.id,
          expense_item_id: utilities.id
        }
      }
    }
  })

  console.log('✅ Created expense transactions')

  // 7. Create Transfer Transactions
  const transferTransaction = await prisma.transaction.create({
    data: {
      date: new Date('2024-01-20'),
      amount: 15000,
      type: 'TRANSFER',
      note: 'Transfer to investment account',
      transfer_transaction: {
        create: {
          from_account_id: savingsAccount.id,
          to_account_id: investmentAccount.id
        }
      }
    }
  })

  console.log('✅ Created transfer transactions')

  // 8. Create Investment Transactions
  const investmentTxn1 = await prisma.transaction.create({
    data: {
      date: new Date('2024-01-22'),
      amount: 10000,
      type: 'MF_INVESTMENT',
      note: 'Investment in equity fund',
      investment_transaction: {
        create: {
          from_account_id: investmentAccount.id,
          units_bought: 500.25,
          buy_nav: 19.99,
          mutual_fund_units_lot: {
            create: {
              mutual_fund_id: equityFund.id
            }
          }
        }
      }
    }
  })

  const investmentTxn2 = await prisma.transaction.create({
    data: {
      date: new Date('2024-01-25'),
      amount: 5000,
      type: 'MF_INVESTMENT',
      note: 'Investment in debt fund',
      investment_transaction: {
        create: {
          from_account_id: investmentAccount.id,
          units_bought: 454.55,
          buy_nav: 11.00,
          mutual_fund_units_lot: {
            create: {
              mutual_fund_id: debtFund.id
            }
          }
        }
      }
    }
  })

  console.log('✅ Created investment transactions')

  // 9. Create Redemption Transaction
  const redemptionTxn = await prisma.transaction.create({
    data: {
      date: new Date('2024-02-15'),
      amount: 3000,
      type: 'MF_REDEMPTION',
      note: 'Partial redemption of equity fund',
      redemption_transaction: {
        create: {
          to_account_id: savingsAccount.id,
          sell_nav: 20.50,
          units_redeemed: 146.34,
          redemption_buckets: {
            create: {
              mutual_fund_units_lot_id: investmentTxn1.id, // Using the investment transaction ID as lot ID
              units_redeemed: 146.34
            }
          }
        }
      }
    }
  })

  console.log('✅ Created redemption transaction')

  // 10. Add more sample data for variety
  const entertainmentTxn = await prisma.transaction.create({
    data: {
      date: new Date('2024-01-18'),
      amount: 1200,
      type: 'EXPENSE',
      note: 'Movie tickets and dinner',
      expense_transaction: {
        create: {
          account_id: creditCard.id,
          expense_item_id: entertainment.id
        }
      }
    }
  })

  const dividendTxn = await prisma.transaction.create({
    data: {
      date: new Date('2024-02-01'),
      amount: 800,
      type: 'INCOME',
      note: 'Quarterly dividend payment',
      income_transaction: {
        create: {
          income_source_id: dividends.id,
          account_id: savingsAccount.id
        }
      }
    }
  })

  console.log('✅ Created additional transactions')

  console.log('🎉 Database seeding completed successfully!')
  
  // Print summary
  const accountCount = await prisma.account.count()
  const transactionCount = await prisma.transaction.count()
  const mutualFundCount = await prisma.mutual_fund.count()
  
  console.log(`📊 Summary:`)
  console.log(`   - Accounts: ${accountCount}`)
  console.log(`   - Transactions: ${transactionCount}`)
  console.log(`   - Mutual Funds: ${mutualFundCount}`)
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })