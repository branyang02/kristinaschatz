import '../styles/WorkHistory.css';

const WorkHistory = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-8">
          <h3>Experience</h3>
          <ul className="timeline">{renderListItems()}</ul>
        </div>
      </div>
    </div>
  );
};

const renderListItems = () => {
  const listItems = [
    {
      date: 'Jan 2024 - Current',
      text: <span>TA for Biology 101 (UVA)</span>,
    },
    {
      date: 'May 2022 - Current',
      text: (
        <span>
          Volunteer at{' '}
          <a href="https://www.virginia.edu/">University of Virginia Health System</a>
        </span>
      ),
    },
    {
      date: 'Oct 2023 - Current',
      text: (
        <span>
          EMT at{' '}
          <a href="https://www.virginia.edu/">Charlottesville-Albemarle Rescue Squad</a>
        </span>
      ),
    },
    {
      date: 'May 2023 - Aug 2023',
      text: (
        <span>
          Shadowing Doctor at <a href="https://www.sjia.org/">SJIA</a>
        </span>
      ),
    },
    {
      date: 'Jan 2023 - May 2023',
      text: (
        <span>
          Refugee Support Volunteer at{' '}
          <a href="https://www.virginia.edu/">International Rescue Committee</a>
        </span>
      ),
    },
  ];

  return listItems.map((item, index) => (
    <li key={index}>
      <span className="timeline-date">{item.date}</span>
      <p>{item.text}</p>
    </li>
  ));
};

export default WorkHistory;
