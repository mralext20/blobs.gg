import React from 'react'
import classnames from 'classnames'
import Emoji from './Emoji'

export default function SearchResult({ className, blob, ...rest }) {
  return (
    <a
      href={blob.guild.invite}
      target="_blank"
      rel="noopener noreferrer"
      className={classnames('search-result', className)}
      data-tooltip={`:${blob.name}:`}
      {...rest}
    >
      <Emoji
        id={blob.id}
        animated={blob.animated}
        name={blob.name}
        guild={blob.guild}
        showGuild
      />
    </a>
  )
}
