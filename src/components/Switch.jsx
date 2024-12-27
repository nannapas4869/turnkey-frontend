import React, {useState} from 'react'
import classNames from 'classnames'
function Switch() {
    const [isSelected, setIsSelected] = useState(false);
  return (
    <div onClick={() => setIsSelected(!isSelected)} className={classNames('flex w-20 h-10 bg-gray-600 rounded-full transition-all duration-500', {
        'bg-violet-900': isSelected,
    })}>
        <span className={classNames('h-10 w-10 bg-white rounded-full transition-all duration-500 shadow-lg', {
            'ml-10': isSelected,
        })}></span>
    </div>
  )
}

export default Switch