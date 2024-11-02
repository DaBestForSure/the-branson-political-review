import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./pdf_viewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const options = {
    cMapUrl: "/cmaps/",
    standardFontDataUrl: "/standard_fonts/"
};

const resizeObserverOptions = {};
const maxWidth = 800;

export default function PDFLoader({ file = "/Spring2024.pdf" }) {
    const [numPages, setNumPages] = useState();
    const [loading, setLoading] = useState(true); // Add loading state
    const [containerRef, setContainerRef] = useState(null);
    const [containerWidth, setContainerWidth] = useState();

    const onResize = useCallback((entries) => {
        const [entry] = entries;
        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
        setLoading(false); // Set loading to false when loading is successful
    }

    return (
        <div className="Example">
            <div className="Example__container">
                <div
                    className="Example__container__document"
                    ref={setContainerRef}
                >
                    {loading && (
                        <main className="loading-container">
                            <svg className="loading-ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#000000" />
                                        {/* <stop offset="33%" stopColor="#ffb900" />
                                        <stop offset="67%" stopColor="#f78200" /> */}
                                        <stop offset="100%" stopColor="#000000" />
                                    </linearGradient>
                                    <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                                        <stop offset="0%" stopColor="#000000" />
                                        {/* <stop offset="33%" stopColor="#973999" />
                                        <stop offset="67%" stopColor="#009cdf" /> */}
                                        <stop offset="100%" stopColor="#000000" />
                                    </linearGradient>
                                    {/* 3452eb, 0095ff */}
                                </defs>
                                <g fill="none" strokeLinecap="round" strokeWidth="16">
                                    <g className="loading-ip__track" stroke="#ddd">
                                        <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
                                        <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
                                    </g>
                                    <g strokeDasharray="180 656">
                                        <path className="loading-ip__worm1" stroke="url(#grad1)" strokeDashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
                                        <path className="loading-ip__worm2" stroke="url(#grad2)" strokeDashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
                                    </g>
                                </g>
                            </svg>
                        </main>
                    )}



                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        options={options}
                        loading={null}
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                loading={null}
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={
                                    containerWidth
                                        ? Math.min(containerWidth, maxWidth)
                                        : maxWidth
                                }
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}
