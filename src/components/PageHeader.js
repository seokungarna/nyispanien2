import React, { Fragment }  from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import Content from './Content'
//import { Link } from 'gatsby'
import './PageHeader.css'



const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  offertknapp,
  datum,
  categories,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
        <div className="">
          
            {datum && (
              <time
                className="SinglePost--Meta--Date"
                itemProp="dateCreated pubdate datePublished"
                date={datum}
              >
                {datum}
              </time>
            )}
            {categories && (
              <Fragment>
                <span> | </span>
                {categories.map((cat, index) => (
                  <span
                    key={cat.category}
                    className="SinglePost--Meta--Category"
                  >
                    {cat.category}
                    {/* Add a comma on all but last category */}
                    {index !== categories.length - 1 ? ',' : ''}
                  </span>
                ))}
              </Fragment>
            )}
          </div>
    
       
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // date: PropTypes.string,
  // categories: PropTypes.array
}

export default PageHeader
