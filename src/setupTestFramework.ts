import { configure } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

jest.mock('apollo-boost')

configure({ adapter: new EnzymeAdapter() })
