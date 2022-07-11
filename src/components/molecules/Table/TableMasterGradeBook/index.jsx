import React from 'react'
import { LocalLibrary } from '@mui/icons-material';
import { useGradeBook } from "../../../../services";

function TableMasterGradeBook() {
    const { 
        styleShadow, 
        styleTableTd,
        dataGradeBook,
        detailAverageGrade,
        averageGrade,
    } = useGradeBook()

  return (
    <>
        <div className="row">
            <div className="col-md-4">
                <div className="card-report-avg bg-neutral-50 radius-4 p-24" style={styleShadow} >
                    <div className="h6 mb-16">Overall Grade</div>
                    <div className="h-1 bg-secondary-500"></div>
                    <table className="w-100 my-8">
                        <thead>
                            <tr>
                                <th className="font-sm-medium text-neutral-300 py-8 text-start">Lesson</th>
                                <th width="24%" className="font-sm-medium text-neutral-300 py-8 text-center">Avg. Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                detailAverageGrade && detailAverageGrade?.map((result1, index1) => {
                                    return <tr key={index1}>
                                    <td className="py-8" style={styleTableTd}>{result1.lesson}</td>
                                    <td className="py-8 text-center">{result1.average.toFixed(1)}</td>
                                </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <div className="h-1 bg-secondary-500"></div>
                    <table className="w-100 mt-8">
                        <tbody>
                            <tr>
                                <td className="py-8 font-medium">Total Grade</td>
                                <td width="24%" className="py-8 font-medium text-center">{averageGrade?.totalGrade.toFixed(1)}</td>
                            </tr>
                            <tr>
                                <td className="pt-8 font-medium">Average Grade</td>
                                <td className="pt-8 font-medium text-center">{ parseFloat(averageGrade?.avgGrade) ? averageGrade?.avgGrade.toFixed(1) : '0.0'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-md-8">
                {
                    dataGradeBook && dataGradeBook.lessons?.map((result1, index1) => {
                        return <div key={index1} className="grader-unit mb-40">
                        <div className="header-grader bg-neutral-50 radius-4 px-32 py-16 d-flex align-items-center mb-16" style={styleShadow} >
                            <div className="icons mr-16 radius-p-50 w-48 h-48 bg-secondary-300 d-flex align-items-center justify-content-center">
                                <LocalLibrary />
                            </div>
                            <div className="font-bold">{result1?.name}</div>
                        </div>
                        <div className="body-grader bg-neutral-50 radius-4 px-24 py-8" style={styleShadow}>
                        <table className="w-100 my-8">
                            <thead>
                                <tr>
                                    <th className="font-sm-bold py-16 text-start">No</th>
                                    <th width="80%" className="font-sm-bold py-16 text-start">Assessment Name</th>
                                    <th className="font-sm-bold py-16 text-center">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    result1.subtopics.length > 0 ?
                                    result1.subtopics?.map((item, index) => {
                                        return <tr key={index} className="border-top border-secondary-500">
                                        <td className="py-16 font-sm text-neutral-200">{index+1}</td>
                                        <td className="py-16 font-sm" style={styleTableTd}>{item?.name}</td>
                                        <td className="py-16 font-sm text-center">
                                            { item.score ? item.score.toFixed(1) : 'On grading' }
                                        </td>
                                    </tr>
                                    })
                                    : (<tr>
                                        <td className="datanotfound font-sm text-neutral-200 border-top border-secondary-500 pt-8" colSpan="3">
                                          No data available
                                        </td>
                                      </tr>)
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default TableMasterGradeBook