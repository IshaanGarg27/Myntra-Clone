const Spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          class="spinner-grow text-danger"
          style={{ width: "8rem", height: "8rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
export default Spinner;
