function PageHeader({ title, buttonLabel }) {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-4">
      <h2 className="mb-0">{title}</h2>
      <button className="btn btn-primary">{buttonLabel}</button>
    </div>
  );
}

export default PageHeader;
