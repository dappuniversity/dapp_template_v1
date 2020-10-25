import { tokens, ether, ETHER_ADDRESS } from './helpers'

const ContractName = artifacts.require('./ContractName')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('ContractName', ([acc1, acc2]) => {
	let contract

	beforeEach(async () => {
		contract = await ContractName.new()
	})

	describe('1st block of tests', () => {
		it('1st test1', async () => {

		})

		it('1st test1', async () => {
			
		})
	})

	describe('2nd block of tests', () => {
		it('2nd test1', async () => {

		})

		it('2nd test1', async () => {
			
		})
	})
})