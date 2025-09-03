import { WeaponModel } from '@/components/weaponModel/WeaponModel';

export const Weapon = (props) => {
  return (
    <group {...props}>
      <WeaponModel />
    </group>
  );
};
