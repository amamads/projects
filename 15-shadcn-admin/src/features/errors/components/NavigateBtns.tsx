import { Button } from '@/components/atoms/button'
import { Link, useNavigate } from 'react-router-dom'

export default function NavigateBtns() {
    const navigate = useNavigate()
  return (
     <div className="space-x-4 mt-5">
        <Button variant="outline" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
  )
}
