/* eslint-disable import/prefer-default-export */
import { parseISO, startOfMonth } from 'date-fns';
import { v4 } from 'uuid';
import AppError from '../errors/AppError';
import { getClient } from '../client/elasticsearch';

export const Import = async (
  companyId: string,
  date: string,
  balanceSheet: string,
): Promise<any> => {
  try {
    const isoDate = parseISO(date);
    const content = balanceSheet.split('\r\n');
    const result = content
      .map(row => row.toString().replace(/\t/g, ' / '))
      .map(element => element.split('/'));

    const balance = result.map(register => {
      return {
        i: Math.floor(Math.random() * 10),
        classification: register[0],
        description: register[1],
        description_nd: register[1]
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, ''),
        initialCash: register[2].replace(/\D+/g, ''),
        debit: Number(register[3].replace(/\D+/g, '')),
        credit: Number(register[4].replace(/\D+/g, '')),
        finalCash: Number(register[5].replace(/\D+/g, '')),
      };
    });

    const balanceFormatted = {
      id: v4(),
      companyId,
      date: startOfMonth(isoDate),
      balanceSheet: balance,
    };

    await getClient().index(
      {
        index: 'registers',
        type: 'type_registers',
        body: balanceFormatted,
      },
      err => {
        if (err) {
          throw new AppError({ message: err.message, statusCode: 400 });
        }
      },
    );

    return balanceFormatted;
  } catch (error) {
    throw new AppError({ message: error.message, statusCode: 400 });
  }
};
