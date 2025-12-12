import { render, screen } from '@testing-library/react'
import MovieList from '@/components/MovieList'

describe('MovieList', () => {
  test('영화 목록을 정상적으로 출력해야 합니다.', async () => {
    render(<MovieList />)
    expect(screen.getByText('Avengers: Infinity War')).toBeInTheDocument()
    expect(screen.getByText('Avengers: Endgame')).toBeInTheDocument()
  })
})
