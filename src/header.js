import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTg0IDM0NCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5sb2dvLWxvY2t1cC13aGl0ZTwvdGl0bGU+PGcgaWQ9ImxvZ28tbG9ja3VwIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MDYuMTUsMTA5LjUzbDIxLTEwLjE4LDY4LjI3LDg4LjEuNi0uMTl2LTNxMC0zNS45MiwwLTcxLjg1YzAtMS45My40Ny0zLDIuMzUtMy44Niw2LjU2LTIuODksMTMtNiwxOS44Ni05LjE3VjIyOC4yM2MtNC4yMiwwLTguNTYtLjM1LTEyLjgyLjA5LTQuNS40Ni03LjA4LTEuMzEtOS43Ny00LjgyLTIxLjU3LTI4LjE3LTQzLjM4LTU2LjE2LTY1LjEyLTg0LjItLjUxLS42NS0xLjA4LTEuMjYtMi0yLjM3djkxLjM0SDQwNi4xNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMjYwLDIzMC41NGMtNS0uOTItMTAuMDktMS41LTE1LTIuODMtMjUuMjktNi45LTQzLTI4LjEtNDUuODgtNTQuMTMtMi4wNy0xOSwxLjU4LTM2LjQ2LDEzLjYtNTEuNTMsMTUtMTguODYsMzUuMTUtMjYuMjksNTguOTEtMjQuNzUsMTQuODMsMSwyOC4zNCw1LjQ0LDQwLDE0Ljg5Ljk0Ljc2LDEuODcsMS41NCwzLDIuNDRxLTcuMyw4LjY5LTE0LjE1LDE2Ljg2Yy00LjMyLTIuODMtOC4xNy02LTEyLjU1LTguMTItMzYuMzEtMTcuMzQtNjYuMjQsOC41MS02NS41Myw0MS41Mi4yMywxMS4xMSwzLjE2LDIxLjM3LDEwLjUyLDI5Ljg5LDEwLjMsMTEuOTIsMjMuNjksMTYsMzksMTQuNTNhNTIuMTEsNTIuMTEsMCwwLDAsMjMuMTMtNy45MSw0LjIxLDQuMjEsMCwwLDAsMi4yOS00LjFjLS4xMy03LDAtMTQsMC0yMS4yM2gtMzNjLjgyLTEuNjUsMS40MS0yLjg5LDItNC4xLDEuOC0zLjQ0LDQtNi43Miw1LjM0LTEwLjMyLDEuNy00LjQ0LDQuMzUtNS44LDkuMTMtNS42MywxMS42My40MiwyMy4yOC4xNCwzNC45Mi4xNEgxMzE5Yy4wNiwxLjA3LjE1LDEuODkuMTUsMi43MSwwLDE2LjM4LDAsMzIuNzYuMDYsNDkuMTNhNC44LDQuOCwwLDAsMS0yLjE4LDQuMjFjLTEzLDEwLjI0LTI3LjY2LDE2LjU3LTQ0LjMsMTcuOWExMi43LDEyLjcsMCwwLDAtMS45LjQzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTgwMi42OSwxOTQuMjljLjUzLTEuNTEuODktMi40NCwxLjE5LTMuMzlxMTQuMjgtNDQuMzksMjguNTEtODguNzljLjY5LTIuMTgsMS42NC0yLjg4LDMuOTQtMi44Miw2LjgxLjE3LDEzLjYyLjA2LDIwLjgzLjA2LTE1LDQzLjQzLTMwLDg2LjYyLTQ0Ljk1LDEyOS45LTYuMDksMC0xMi4wNS4wOS0xOC0uMS0uNzgsMC0xLjkxLTEuMzEtMi4yMy0yLjIzcS0xMC45Mi0zMS42Mi0yMS42OC02My4yOS00LjE3LTEyLjIxLTguNC0yNC4zOWMtLjIxLS42LS41Mi0xLjE2LTEtMi4xNy0zLjIxLDkuMzUtNi4yOCwxOC4yNi05LjMzLDI3LjE5UTc0MSwxOTUuMzcsNzMwLjQxLDIyNi41MWMtLjczLDIuMTUtMS43NCwyLjkxLTQsMi44MS00LjYzLS4yMS05LjI4LS4xNi0xMy45MSwwYTMsMywwLDAsMS0zLjQ2LTIuNHEtMTguNjktNTQuMjctMzcuNS0xMDguNTEtMi44Mi04LjE4LTUuNjQtMTYuMzVjLS4yNy0uNzgtLjQ3LTEuNTgtLjc3LTIuNTdoMjQuNDNsMzAuNjUsOTUuMjJjLjY1LTIsMS4wNS0zLjIxLDEuNDUtNC40MnExNC42OC00NC40MiwyOS4zMi04OC44NGMuNjMtMS45MiwxLjQ1LTIuNjgsMy41NS0yLjYxLDQuNjMuMTgsOS4yOC4xNiwxMy45MSwwLDItLjA3LDIuODIuNTYsMy40MywyLjQxcTEwLjc4LDMzLDIxLjczLDY2LDQuMTksMTIuNjYsOC4zOSwyNS4zQzgwMi4wOCwxOTIuOTIsODAyLjI3LDE5My4zLDgwMi42OSwxOTQuMjlaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTE3MS4xMyw5OS4zNFYyMjguMjNjLTMuMzksMC02LjgxLS40LTEwLjA5LjA4LTYuNTUsMS0xMC40Ni0xLjc0LTE0LjQzLTctMjAuODUtMjcuNTMtNDIuMTctNTQuNy02My4zMy04Mi0uNTEtLjY2LTEuMDctMS4yOC0yLTIuNDFWMjI4aC0yMi4zOXYtM3EwLTU2LjIyLDAtMTEyLjQ1YTQsNCwwLDAsMSwyLjY5LTQuMjVjNi4wOC0yLjgyLDEyLjA2LTUuODksMTguMzgtOUwxMTQ4LjY0LDE4OGMuMDgtMS42MS4xNy0yLjU2LjE3LTMuNTEsMC0yNCwwLTQ3Ljg5LDAtNzEuODQsMC0yLjIxLjU4LTMuMzUsMi42Ni00LjI1QzExNTcuOSwxMDUuNiwxMTY0LjI4LDEwMi41MiwxMTcxLjEzLDk5LjM0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE0OTMsOTkuMjljMjIuODcsMjkuNTIsNDUuNTIsNTguNzYsNjguMTgsODhsLjY5LS4wOVYxODRjMC0yMy44NiwwLTQ3LjcyLDAtNzEuNTgsMC0xLjk0LjQ4LTMsMi4zNi0zLjg2LDYuNTYtMi44OSwxMy02LDE5Ljg2LTkuMTZWMjI4LjIxYy02LDAtMTIsLjA3LTE4LS4wOC0uNzcsMC0xLjY1LTEuMTEtMi4yNC0xLjg4cS0zMy4yNy00Mi44NC02Ni40Ny04NS43MWMtLjc1LTEtMS41Mi0xLjktMi44Ny0zLjU4djkxLjEySDE0NzJ2LTIuOTNxMC01Ni4zOS0uMDYtMTEyLjc3YTMuNzYsMy43NiwwLDAsMSwyLjU3LTRDMTQ4MC42MiwxMDUuNSwxNDg2LjY3LDEwMi40MSwxNDkzLDk5LjI5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU3NC40MiwxMTkuNjFWMTUzLjFoNjQuNWMwLDYuNDcsMCwxMi42LS4wOCwxOC43MiwwLC41Mi0xLjEyLDEuNDItMS43NiwxLjQ2LTIuNzMuMTctNS40OC4wOC04LjIzLjA4SDU3NC40N3YzNC4zN2g3My40MnYyMC4zM2gtOTYuMVY5OS41Mmg5NS4yN2MtMy4zMiw2LjQ4LTYuNDcsMTIuOC05Ljg1LDE5LS40LjcyLTIuMDYsMS0zLjE0LDEuMDYtMTguNjUuMDYtMzcuMywwLTU1Ljk0LDBaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQ0NC4wOSw5OS41NGMtMy4yNSw2LjM2LTYuNDEsMTIuMzgtOS40LDE4LjQ4LS44MywxLjY5LTIuMDcsMS42LTMuNTEsMS42aC01OS43djMzLjQ0aDY0LjMxVjE3My4zaC02NC4zNnYzNC40M2g3My40MnYyMC4zNmgtOTYuMDlWOTkuNTRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOTM1LjY3LDIyOC4wNVY5OS41OEgxMDMxYy0yLjM4LDQuNjktNS4xLDkuMTQtNywxMy45My0xLjkyLDUtNC44NCw2LjM5LTEwLjE1LDYuMjYtMTcuMzEtLjQxLTM0LjY0LS4xNi01Mi0uMTZoLTMuNTNWMTUzaDY0LjA5djIwLjM2SDk1OC4zM1YyMDcuOGg3My41N3YyMC4yNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMjQuODksMTE0LjE0LDMwMC43LDcwLjQ3Yy4wOSwyLjg2LjE4LDUuNTQuMjYsOC4yMnEuNDIsMTQuNzMuODQsMjkuNDZjLjE5LDYuODUuMzQsMTMuNzEuNTMsMjAuNTYuMjUsOS4xNi41NSwxOC4zMS44LDI3LjQ2LjIsNi43OC4zNCwxMy41Ni41MywyMC4zNS4yNiw5LjI2LjU1LDE4LjUyLjgxLDI3Ljc5LjE0LDQuODUuMjQsOS43MS4zNywxNC41Ni4yOSwxMC40NS41NywyMC45LjksMzEuMzVhMS44MywxLjgzLDAsMCwxLTEuMDYsMS45MmMtNy40OSw0LjIzLTE0Ljk0LDguNTEtMjIuNCwxMi43Ny0uMzUuMi0uNzEuMzgtMS4xOC42MlEyMjMuOTQsMTY4LjM5LDE2Ni44LDcxLjM0bC0uMjgsMHY3Ni41NWwyNS44Ny0xNC42NGM0Ljc5LDguMjksOS41NCwxNi41MiwxNC4zNCwyNC44NS0uMzkuMjQtLjcyLjQ2LTEuMDYuNjVxLTE5LjE4LDEwLjc4LTM4LjM4LDIxLjU1YTEuNjksMS42OSwwLDAsMC0xLDEuN2MwLDcuOTQsMCwxNS44OCwwLDIzLjgycS0uMDgsMzIuODgtLjE3LDY1Ljc2LDAsMTAuMzEsMCwyMC41OS0uMDYsMTkuNjktLjE3LDM5LjM5YTEuNTgsMS41OCwwLDAsMS0uNSwxLjE5Yy02LjI4LDMuNjQtMTIuNTksNy4yNC0xOSwxMC45NEw4MC43NiwyMjkuNjNsLTc1LDQycS0uMTEtMy44OS0uMjItNy43NC0uNTEtMTYuMTItMS0zMi4yM2MtLjIxLTYuNjMtLjM4LTEzLjI3LS41OS0xOS45cS0uNTgtMTguNTEtMS4xOS0zN2MtLjIxLTYuNjMtLjM5LTEzLjI2LS41OS0xOS44OUwxLjA2LDExOS40OEMuNzYsMTEwLjIyLjUzLDEwMSwuMTEsOTEuN0EzLDMsMCwwLDEsMiw4OC40N2M3LjM3LTQuMTMsMTQuNjgtOC4zNiwyMi0xMi41NmwuOTEtLjUsMTEyLjM4LDE5NSwuMjQtLjA1VjE5Ny4xbC0yMy43MiwxMy4zMkMxMDksMjAyLjMsMTA0LjIzLDE5NC4yMSw5OS40LDE4NmMuMzgtLjI0LjctLjQ1LDEtLjY0cTE4LjE0LTEwLjI3LDM2LjI4LTIwLjUzYTEuNzIsMS43MiwwLDAsMCwxLTEuNzNjMC0xMC40Mi4wNi0yMC44NC4wNy0zMS4yN3EwLTI4LC4wNS01Ni4wOWMwLTkuNzkuMDYtMTkuNTguMDgtMjkuMzhRMTM4LDI5LDEzOCwxMS42NUExLjY0LDEuNjQsMCwwLDEsMTM5LDEwYzUuODYtMy4zMiwxMS43MS02LjY5LDE3LjU2LTEwbC44Ny0uNDZaTTIzOS41MywxMzlsMzYuMjMsNjEuNTEuMTgtLjA4VjExOC4yOVpNMzAuMywxNDJsLS4zMS4wNWMxLjM1LDI2Ljg5LDIuNzEsNTMuNzksNC4wNyw4MC44Nkw2Ni42NywyMDUuMVE0OC40MiwxNzMuNDYsMzAuMywxNDJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzMsNzAuNzEsMTMwLjMyLDE1djIuODRxMCwxNC42My0uMDgsMjkuMjZhMS40NCwxLjQ0LDAsMCwxLS44NCwxLjQ4TDQ3LjcyLDk0LjYzYy0uMTMuMDgtLjI3LjE0LS41Mi4yN1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNzUuNjYsMzI3YzAtLjU5LS4wOC0uODgtLjA4LTEuMTdxLS4wOS0xNC44NS0uMTctMjkuNzFhMS40NCwxLjQ0LDAsMCwxLC43Ny0xLjUycTQxLjU4LTIzLjY3LDgzLjE0LTQ3LjRjLjEtLjA2LjItLjEuNDUtLjIybDEzLjgsMjMuODNaIi8+PC9nPjwvc3ZnPg==" alt="New Engen" />
      <form>
        <input type="text" name="search" className="search" placeholder="Search" />
      </form>
    </div>
  );
}

export default Header;