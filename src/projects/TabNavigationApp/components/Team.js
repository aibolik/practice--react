import React from 'react';
import { useLocation, Link, Route, useParams } from 'react-router-dom';

const TEAM_MEMBERS = [
  {
    name: 'Alex',
    slug: 'alex',
  },
  {
    name: 'John',
    slug: 'john',
  },
  {
    name: 'Lora',
    slug: 'lora',
  }
];

const TeamMember = () => {
  const { slug } = useParams();

  const member = TEAM_MEMBERS.find(m => m.slug === slug);

  return (
    <div>
      <h2>Profile of {member.name}</h2>
    </div>
  );
}

const Team = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1>Team</h1>
      <p>
        This is Team component and matched to route: {pathname}
      </p>
      <div>
        {TEAM_MEMBERS.map(member => (
          <Link key={member.slug} to={`/team/${member.slug}`}>
            {member.name}
            <br />
          </Link>
        ))}
        <Route path="/team/:slug">
          <TeamMember />
        </Route>
      </div>
    </div>
  );
}

export default Team;