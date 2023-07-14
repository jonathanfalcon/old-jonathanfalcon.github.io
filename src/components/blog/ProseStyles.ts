//Prose styles
let baseStyleFix = 'max-md:prose-p:text-[1.075rem] max-md:prose-li:text-[1.075rem]';
let baseStyle = 'prose md:prose-xl dark:prose-invert max-w-4xl mx-auto px-4';

let baseTableStyle = 'prose-table:min-w-[30rem] prose-table:table-auto md:prose-table:text-lg prose-table:text-base prose-table:my-0';
let tableHeadStyle = 'prose-thead:bg-primary-700 dark:prose-thead:bg-primary-600 prose-th:text-white';
let tableRowStyle = 'even:prose-tr:bg-gray-200 dark:even:prose-tr:bg-slate-700 prose-tr:border-gray-300 dark:prose-tr:border-slate-600 last:prose-tr:border-primary-700 dark:last:prose-tr:border-primary-600';
let tableDataStyle = 'prose-td:px-4 prose-th:px-4 prose-th:py-3 prose-td:py-3';
let tableStyle = `${tableHeadStyle} ${tableRowStyle} prose-table:rounded-xl`;


let baseHeadingStyle = 'prose-headings:font-bold prose-headings:!mb-2.5';
let h2Style = 'md:prose-h2:!text-4.5xl prose-h2:!text-3xl prose-h2:uppercase prose-h2:tracking-wide';
let h3Style = 'md:prose-h3:!text-3xl prose-h3:!text-2xl';
let h4Style = 'md:prose-h4:!text-2xl prose-h4:!text-1.5xl';
let h5Style = 'md:prose-h5:!text-1.5xl prose-h5:!text-xl prose-h5:!mb-0.5';
let h6Style = 'md:prose-h6:!text-1.5xl prose-h6:!text-xl prose-h6:!mb-0.5';
let headingStyle = `${baseHeadingStyle} ${h2Style} ${h3Style} ${h4Style} ${h5Style} ${h6Style}`;

let paragraphStyle = 'prose-p:mt-0';

let textColor = 'text-inherit dark:text-inherit prose-li:marker:text-inherit dark:prose-li:marker:text-inherit';

let linkStyle = 'prose-a:duration-200 prose-a:transition prose-a:text-primary-600 hover:prose-a:text-primary-800 dark:hover:prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:underline-offset-2';

let imageStyle = 'prose-img:rounded-2xl prose-img:shadow-lg';

// Try later
//let imageStyle = 'lg:prose-img:rounded-2xl lg:prose-img:shadow-lg max-lg:prose-img:-mx-4';

let preStyle = 'prose-pre:!bg-slate-800';

export const proseStyle = `${baseStyle} ${tableStyle} ${linkStyle} ${imageStyle} ${preStyle}`;
