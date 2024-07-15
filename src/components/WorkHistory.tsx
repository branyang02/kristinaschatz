import '../styles/WorkHistory.css';

const WorkHistory = () => {
  return (
    <>
      <div className="container mt-3 mb-5">
        <h3>Experiences</h3>
        <div className="row">
          <div className="col-md-8">
            <ul className="timeline">{renderListItems()}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

const renderListItems = () => {
  const listItems = [
    {
      date: 'May 2022 - Current',
      text: (
        <span>
          Research Assistant at{' '}
          <a href="https://www.arandjeloviclab.com/">Arandjelovic Lab</a>
        </span>
      ),
    },
    {
      date: 'Jan 2024 - Current',
      text: (
        <span>
          EMT at{' '}
          <a href="https://www.westernrescue.org/">Western Albemarle Rescue Squad</a>
        </span>
      ),
    },
    {
      date: 'Jan 2024 - Current',
      text: (
        <span>
          Organic Chemistry Teaching Assistant at{' '}
          <a href="https://www.virginia.edu/">UVA</a>
        </span>
      ),
    },
    {
      date: 'Aug 2023 - Current',
      text: (
        <span>
          ESL Classroom Assistant at{' '}
          <a href="https://www.rescue.org/united-states/charlottesville-va">
            International Rescue Committee
          </a>
        </span>
      ),
    },
    {
      date: 'Sep 2023 - Current',
      text: (
        <span>
          Hospice Volunteer at{' '}
          <a href="https://www.heartlandhospice.com/">Heartland Hospice</a>
        </span>
      ),
    },
    {
      date: 'June 2022 - Dec 2022',
      text: (
        <span>
          Patient Transporter at{' '}
          <a href="https://uvahealth.com/">UVA Health</a>
        </span>
      ),
    },
    {
      date: 'Feb 2023 - July 2023',
      text: (
        <span>
          ED and Waiting Room Volunteer at{' '}
          <a href="https://www.sentara.com/">Sentara Martha Jefferson Hospital</a>
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
