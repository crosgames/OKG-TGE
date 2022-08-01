import * as conf from '../config';

module.exports = async ({ ethers, deployments, hardhatArguments }: any) => {
  const network: string = hardhatArguments.network
    ? hardhatArguments.network
    : 'development';
  const [deployer] = await ethers.getSigners();
  console.log('deployed by:', deployer.address);

  const { deploy, get, execute } = deployments;
  const initBal = await ethers.provider.getBalance(deployer.address);

  const okg = await get('OKGToken');

  const deployVestingConf = {
    from: deployer.address,
    log: true,
    args: [okg.address],
  };
  const executeConf = {
    from: deployer.address,
    log: true,
  };

  const vesting = await deploy('PeriodicVesting', deployVestingConf);

  const executePolicyParam = [
    'PeriodicVesting',
    executeConf,
    'setPolicy',
  ] as any[];
  const config = conf.pools;
  const total = conf.total;

  for (let i = 0; i < config.length; i++) {
    console.log(config[i].params);
    await execute.apply(null, executePolicyParam.concat(config[i].params));

    const policies = [new Array(config[i].accounts[0].length).fill(i)];
    const addBeneficiariesParam = (
      ['PeriodicVesting', executeConf, 'addBeneficiaries'] as any[]
    ).concat(config[i].accounts, policies);

    await execute.apply(null, addBeneficiariesParam);
  }

  // for (const u of upfronts) {
  //   await execute('OKGToken', executeConf, 'transfer', u.address, u.total);
  // }
  // await execute('OKGToken', executeConf, 'transfer', vesting.address, total);
  const newBal = await ethers.provider.getBalance(deployer.address);
  console.log(
    `gas cost: ${ethers.utils.formatEther(initBal.sub(newBal).toString())}`
  );
};
