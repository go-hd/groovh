import Papa from 'papaparse'
import Encoding from 'encoding-japanese'

export class NonCsvError extends Error {
  constructor(
    readonly file: File
  ) {
    super(`${file.name} は CSV ではありません。`)
    this.name = 'NonCsvError'
  }
}

export class FailedToDetectEncodingError extends Error {
  constructor(
    readonly file: File
  ) {
    super(`${file.name} の文字コードを認識できませんでした。`)
    this.name = 'FailedToDetectEncodingError'
  }
}

type ParseData = string[]

interface ParseResult {
  fileName: string
  header: ParseData
  data: ParseData[]
}

export const file2csv = (file: File) => {
  if (file.type !== 'text/csv') {
    throw new NonCsvError(file)
  }

  const parse = () => new Promise<ParseResult>(async (resolve) => {
    const codes = new Uint8Array(await file.arrayBuffer())
    const encoding = Encoding.detect(codes)

    if (!encoding) {
      throw new FailedToDetectEncodingError(file)
    }

    const unicodeString = Encoding.convert(codes, {
      type: 'string',
      from: encoding,
      to: 'UNICODE'
    })

    Papa.parse<ParseData>(unicodeString, {
      complete: function (results) {
        const [header, ...data] = results.data
        const filteredData = data.filter(row => Array.isArray(row) && header.length === row.length)

        resolve({
          fileName: file.name,
          header,
          data: filteredData,
        })
      }
    })
  })

  return {parse}
}