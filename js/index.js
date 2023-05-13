

const btnChageTheme = document.querySelector('#btn-change-theme');

btnChageTheme.addEventListener('click', () => {
  const html = document.documentElement;
  const theme = html.getAttribute('data-bs-theme');

  changeThemeAllText(theme);

  document.documentElement.setAttribute('data-bs-theme', theme === 'dark' ? 'light' : 'dark');

  document.querySelector('.bi-moon').classList.toggle('d-none');
  document.querySelector('.bi-sun').classList.toggle('d-none');
})

const changeThemeAllText = (theme) => {
  const text = document.querySelectorAll(`.text-theme-${theme}`);
  text.forEach((item) => {
    item.classList.remove(`text-theme-${theme}`)
    item.classList.add(`text-theme-${theme === 'dark' ? 'light' : 'dark'}`)
  })
}