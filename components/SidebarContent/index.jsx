import React from 'react'
import { crewContainer, crewJob, prodCompany, sidebar } from './styles';

const SidebarContent = ({isMovie, content}) => {
  // isMovie prop returns a bolean to determine if it's movie or tv

  const { 
    budget, 
    credits,
    production_companies, 
    revenue, 
    status,
    // tv props
    original_name,
    number_of_episodes
  } = content;

  const getProductionCompany = production_companies?.slice(0,4).map((company) => {
    return (
      <p className={prodCompany} key={company.id}>{company.name}</p>
    )
  });

  const getCrew = credits.crew?.slice(0,4).map((crew) => {
    return (
      <div className={crewContainer}  key={crew.credit_id}>
        <p>{crew.name}</p>
        <p className={crewJob} >{crew.job}</p>
      </div>
    )
  });

  return (
    <div className={sidebar}>
      {
        isMovie ? (
          <>
            <div>
              <h4>Budget</h4>
              <p>{`$ ${budget !== "" ? budget.toLocaleString() : '-'}`}</p>
            </div>
            <div>
              <h4>Revenue</h4>
              <p>{`$ ${revenue !== "" ? revenue.toLocaleString(): '-'}`}</p>
            </div>
          </>
        ) : (
          <div>
            <h4>Original Name</h4>
            <p>{original_name}</p>
          </div>
        )
      }

      <div>
        <h4>Status</h4>
        <p>{status}</p>
      </div>
      <div>
        <h4>Production Companies</h4>
        {getProductionCompany}
      </div>

      {
        isMovie ? (
          <div>
            <h4>Crews</h4>
            {getCrew}
          </div>
        ) : (
          <div>
            <h4>Total Episodes</h4>
            {`${number_of_episodes} episodes`}
          </div>
        )
      }
    </div>
  )
}

export default SidebarContent