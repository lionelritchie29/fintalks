const showCredit = () => {
  document
    .getElementById("credit")
    .addEventListener("click", () =>
      alert(
        "Illustrations by 'Stories by Freepik' => https://stories.freepik.com/, Icons by Vitaly Gorbachev from FlatIcon => https://www.flaticon.com/authors/vitaly-gorbachev "
      )
    );
};

export default showCredit;
