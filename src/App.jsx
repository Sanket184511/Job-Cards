import React from "react";
import Card from "./components/Card";
const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://imgs.search.brave.com/kcwUNFQXnhfIN8R_IcdMTWqvnE5qdZmvcIxvLigMHK4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/cf6vDDzPeO68F2o1RG0yNLbxpPTCP4ogRi6Tj4yhGn4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/LW1hcnF1ZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTEvTWV0YS1FbWJs/ZW1lLTY1MHgzNjYu/anBn",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "SDE I",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/gv4WNLUEiumszrQhs9sYAc1KuwHIcrTS2l7O-UcZmTo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q4Lzhm/LzMyL2Q4OGYzMjQz/OTU0Zjc0NGI0YjIx/MmVmOTM1ODFhMTI0/LmpwZw",
      companyName: "Apple",
      datePosted: "1 month ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/hAiypPNDgbK6Kb8JyK8JFh-zXXBBL-UMaPg5XDuqvtk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ1LzIvbmV0Zmxp/eC1sb2dvLXBuZ19z/ZWVrbG9nby00NTE5/ODEucG5n",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Remote, India",
    },
    {
      brandLogo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEXz8/PzUyWBvAYFpvD/ugjz9PX19PXz+fr39fr69vPy9frzRAB5uAAAofD/tgDz3dni6tfzTBbzmomx0oKBxfH70ILX5/L16tfz5eLo7eLzPADzlIGs0Hl5wvH7znr07eIAnvDzvrTL3rDi6/Ow1/L43rDXriMNAAABeUlEQVR4nO3cR1IDQRREwcb0SGjkvTcI7n9FNmhEBL1g8zUs8l2gIi9QKUmSpHs5vPtWFV4uANMounUD3IyjS7+JebStY9vuOt9b3X0/unFVENZPsU2mjXD2HBwhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISHhY4XbSWz1D2G/BWFa76bBXW6/sNX7LLj9piBMnejux7dVN7oSUJKkP/QWXjOVe9EVfvXT9TCP7fBxI+bP4yK246lAXJ4HwR1uwt5xGN2qJBy8xDaYN8LF8DU2QkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCwscKo/9Lz23/l+ZldNdm6rSKLpVudh9Yjq9doCRJ/6wvKTpGDq8TZEEAAAAASUVORK5CYII=",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAe1BMVEX///8AAAD5+fm7u7vs7OzT09P19fXk5OTExMTBwcG4uLjy8vLo6Ojv7++wsLCampqQkJDd3d1GRkY/Pz8hISHMzMzX19c4ODgyMjJaWlpKSkppaWmpqamXl5dwcHCMjIx5eXlhYWGAgIBSUlIrKysTExOhoaEUFBQnJye69tieAAAF4klEQVR4nO2daXuiMBRGFUVAkUXFVkUB0Xb+/y8cax1kyUYLJBnf8zk83lwhHm8WRiMAAAAAAABemek2sj0/OaeHfPW+uY6JXDeXdZ6dzskxdiLTlR3zwBiW7QWn3YWcGz6b/JB4TjiT3Y9+mVmTj1O++WmSGrfc/uDPw4XsXnWP5fjZe1dZqnLZHSeW7P51hTtJVv2kqcw6mWueMSPys/7z9GR3jAzZff4RMzvZD5mof6wSW6+h3zADwSfvssoPaeDH3tyxIzO0LNedFriua4U3u3DmXvxxPB92+3eKXtRYB7rcYVa843Xmmp9uP/7m1GjfJWOxdeY38eD+pu5i5ccwM2D3YneOo446MY28JGN+2CYxu/moPohSRuSrxNv2MJgY4TzJGQ9nGnX/mb/GsE/UgPdJ3yLkOkFO/fiTrdoANiP/e7ke4nCgUI0wPpDHgIt6P4/rRpAHb/Ax1vUOjTDWQwchQiVb6+NWVhxbf618rkrZyuaS/94u5pniuRqNVgqNp49fnJXsOOjsM0ckU8ubmX+puT355svet2FoudNF5XJjMb23NG8W/2h5a3pvuRT4HMM+7H/YEdlY5sRP0pz3j8V/XuGzW35e8jTxJ6bypt6GZRSf6RZEzxYnV2Xy2x8D7auASzvg/lGkZatFrh7sAlvXjM3s81vr/j6z1T5Xd97OmlVobiy8Fg9eg+NodPzF5TtPpxvMaf/sVfF/eF898+XIzoEoC4HevJ2C2DHDbwUQ6f6tmbF0Q9OJg5PI463NzWUzu5H7dm2qVKDzb9UrXPvIfs7t4Xr7Wz6onTiTCr4CT+2ueZURnanNP/rvY3eQs7WijCQJP1kJ+UqHXOvXKlej0bzZg3dqkTfmJyumXWsS5m7n/fSpP8J6IS6gt434yWJUh4Na003YfW96p1qRZ33bLj9ZrNUz1bs47bYXQxH9eXaB+hh9YfCTxSwylB7jPypOUIhR9CJnt+OuGXlnX19ohGYje43HgMKZwOO6A8EcypjfrRjDoh4Y8WU8vnIacd2BYg4F1/H4EitRof0t5pnzFPLdgTnk3chThSefO4brDq+TCj4WL1n/Ven4t/CSJTs+peCsINrIjk8pMnayMtnxKQXHHXjm8Fpw3MGTHZ9SmOxkwRzKcOoOr7ZjhwM7WbKjUwymO8AcqjQX7JU4yI5OMZjuAHOo4rGSBXOowqw76Fsq7ocpK1lT2dGpBitZsmNTDsZ6hzf+1S8Gwx1gDnUY7gBzqMNwB5hDHYY7wBzqLOnJWsqOTTkY6x3+i8nTbmluwXug7FYliWS0ZGG2okl9TVqB9ss9eoDqDjCHJtQ5C8xWNKHWHVBzaGLQTmaDORCg1B1QcyCRkZMFcyBB2TV3lB2XklDcAeZAYktOFsyBBGW9A9Y5ECEnS3ZUikI8KOkiOypFIc5ZYLaCDLHugJoDGcKGTg03Wg4Ese4AcyBDnLPAbAUFmEMLCHs0ObsyXxjC6Z0n2TEpC8EdYA40CO4Ac6BBcAeYAw3C8UjaHFY0PDCHFjSO4VH4mFHpNOoOqDnQacxZYLaCTsMdYA50Gu4Ac6DTcAeYA4PaegfeGTavTc0dYA4sau4Ac2BRcweYA4uaO8AcWNTWO+h4LuRw1NZKYoUkk89yrj5lR6M4OrwyRxkqcxaYrWBTcQeYA5uKO8Ac2FTcQdrrxjSh4g4wBw7lZMmORXlK+yywt4JH6RT5VHYsylNyB5gDj8kzWRPZsShPyR1gDjxmz2Rp94a04YE5tKCoO6DmwKdwh1R2JBpQuAPMgU/hDjAHPoU7wBz4FMcd4YgCAWAOLdh/50rXl4sPy2POArMVIjze9OvzW4J/7gBzECH8ThbWOYgwQ82hBfdXNOBVDGLsYQ7inGAO4tzf2K3321WHYwJzECeEOYhzP98B5zkIsoE5iLPC3gpxUsxWiOOj5iCOMx47smPQhhDmIM4CuzJbgNmKFqyxzkGcNJUdgUYEOAlKnAlqDuKYOM9BnCVqDgAAAAAAABD5C1OFQyOJ0NNLAAAAAElFTkSuQmCC",
      companyName: "Tesla",
      datePosted: "2 months ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: " $60/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "data:image/png;base64,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",
      companyName: "IBM",
      datePosted: "10 weeks ago",
      post: "Cloud Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35/hr",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXxvNxVAhUedFaFCYhUrKZ_zAUq-zd7a8_g&s",
      companyName: "Oracle",
      datePosted: "6 days ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: " $48/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOC9uk0BRzNGHXHoL-dzKsRnJhMOTYVuKbw&s",
      companyName: "NVIDIA",
      datePosted: "3 months ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: " $80/hr",
      location: "Bangalore, India",
    },
  ];
 

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              brandLogo={elem.brandLogo}
              datePosted={elem.datePosted}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};
export default App;
