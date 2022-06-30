import React from 'react'
import { LocalLibrary } from '@mui/icons-material';
import { useGradeBook } from "../../../../services";

function TableMasterGradeBook() {
    const { 
        styleShadow, 
        styleTableTd,
        dataGradeBook,
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
                                dataGradeBook && dataGradeBook.lessons?.map((result1, index1) => {
                                    return <tr key={index1}>
                                    <td className="py-8" style={styleTableTd}>{result1.lesson.name}</td>
                                    <td className="py-8 text-center">{result1.lesson.average}</td>
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
                                <td className="pt-8 font-medium text-center">{averageGrade?.avgGrade.toFixed(1)}</td>
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
                            <div className="font-bold">{result1.lesson.name}</div>
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
                                    result1.lesson.subtopics?.map((result2, index2) => {
                                        return <tr key={index2} className="border-top border-secondary-500">
                                        <td className="py-16 font-sm text-neutral-200">{index2+1}</td>
                                        <td className="py-16 font-sm" style={styleTableTd}>{result2.subtopic.name}</td>
                                        <td className="py-16 font-sm text-center">
                                            { result2.score ? result2.score.toFixed(1) : 'On grading' }
                                        </td>
                                    </tr>
                                    })
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