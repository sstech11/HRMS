/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Employee } from "./Employee";
import { EmployeeCountArgs } from "./EmployeeCountArgs";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeFindUniqueArgs } from "./EmployeeFindUniqueArgs";
import { CreateEmployeeArgs } from "./CreateEmployeeArgs";
import { UpdateEmployeeArgs } from "./UpdateEmployeeArgs";
import { DeleteEmployeeArgs } from "./DeleteEmployeeArgs";
import { AttendanceFindManyArgs } from "../../attendance/base/AttendanceFindManyArgs";
import { Attendance } from "../../attendance/base/Attendance";
import { BenefitFindManyArgs } from "../../benefit/base/BenefitFindManyArgs";
import { Benefit } from "../../benefit/base/Benefit";
import { LeaveFindManyArgs } from "../../leave/base/LeaveFindManyArgs";
import { Leave } from "../../leave/base/Leave";
import { PayrollFindManyArgs } from "../../payroll/base/PayrollFindManyArgs";
import { Payroll } from "../../payroll/base/Payroll";
import { PerformanceFindManyArgs } from "../../performance/base/PerformanceFindManyArgs";
import { Performance } from "../../performance/base/Performance";
import { SelfServiceFindManyArgs } from "../../selfService/base/SelfServiceFindManyArgs";
import { SelfService } from "../../selfService/base/SelfService";
import { TalentFindManyArgs } from "../../talent/base/TalentFindManyArgs";
import { Talent } from "../../talent/base/Talent";
import { WorkforceFindManyArgs } from "../../workforce/base/WorkforceFindManyArgs";
import { Workforce } from "../../workforce/base/Workforce";
import { EmployeeService } from "../employee.service";
@graphql.Resolver(() => Employee)
export class EmployeeResolverBase {
  constructor(protected readonly service: EmployeeService) {}

  async _employeesMeta(
    @graphql.Args() args: EmployeeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Employee])
  async employees(
    @graphql.Args() args: EmployeeFindManyArgs
  ): Promise<Employee[]> {
    return this.service.employees(args);
  }

  @graphql.Query(() => Employee, { nullable: true })
  async employee(
    @graphql.Args() args: EmployeeFindUniqueArgs
  ): Promise<Employee | null> {
    const result = await this.service.employee(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Employee)
  async createEmployee(
    @graphql.Args() args: CreateEmployeeArgs
  ): Promise<Employee> {
    return await this.service.createEmployee({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Employee)
  async updateEmployee(
    @graphql.Args() args: UpdateEmployeeArgs
  ): Promise<Employee | null> {
    try {
      return await this.service.updateEmployee({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Employee)
  async deleteEmployee(
    @graphql.Args() args: DeleteEmployeeArgs
  ): Promise<Employee | null> {
    try {
      return await this.service.deleteEmployee(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Attendance], { name: "attendances" })
  async findAttendances(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: AttendanceFindManyArgs
  ): Promise<Attendance[]> {
    const results = await this.service.findAttendances(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Benefit], { name: "benefits" })
  async findBenefits(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: BenefitFindManyArgs
  ): Promise<Benefit[]> {
    const results = await this.service.findBenefits(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Leave], { name: "leaves" })
  async findLeaves(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: LeaveFindManyArgs
  ): Promise<Leave[]> {
    const results = await this.service.findLeaves(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Payroll], { name: "payrolls" })
  async findPayrolls(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: PayrollFindManyArgs
  ): Promise<Payroll[]> {
    const results = await this.service.findPayrolls(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Performance], { name: "performances" })
  async findPerformances(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: PerformanceFindManyArgs
  ): Promise<Performance[]> {
    const results = await this.service.findPerformances(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [SelfService], { name: "selfServices" })
  async findSelfServices(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: SelfServiceFindManyArgs
  ): Promise<SelfService[]> {
    const results = await this.service.findSelfServices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Talent], { name: "talents" })
  async findTalents(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: TalentFindManyArgs
  ): Promise<Talent[]> {
    const results = await this.service.findTalents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Workforce], { name: "workforces" })
  async findWorkforces(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: WorkforceFindManyArgs
  ): Promise<Workforce[]> {
    const results = await this.service.findWorkforces(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}